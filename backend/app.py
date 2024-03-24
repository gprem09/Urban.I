from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai
from dotenv import load_dotenv
from langchain.chains import ConversationalRetrievalChain
from langchain_community.chat_models import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain_community.vectorstores import Chroma
import warnings

warnings.filterwarnings("ignore")

app = Flask(__name__)
CORS(app)

load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
openai.api_key = OPENAI_API_KEY

PERSIST = False

def load_or_create_index():
    if PERSIST and os.path.exists("persist"):
        vectorstore = Chroma(persist_directory="persist", embedding_function=OpenAIEmbeddings())
        return vectorstore
    else:
        loader = DirectoryLoader("data/")
        creator = VectorstoreIndexCreator(
            vectorstore_kwargs={"persist_directory": "persist"}) if PERSIST else VectorstoreIndexCreator()
        return creator.from_loaders([loader]).vectorstore

index = load_or_create_index()

chain = ConversationalRetrievalChain.from_llm(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    retriever=index.as_retriever(search_kwargs={"k": 1}),
)

chat_history_global = []

@app.route('/chat', methods=['POST'])
def chat():
    global chat_history_global
    data = request.json

    input_text = data.get('input_text')
    if not input_text:
        return jsonify({"error": "No input provided"}), 400
    
    input_with_instruction = f"{input_text}\nStart the conversation with enthusiasm and engage the user in the conversation. Don't provide any suggestions/results until I ask you. Please keep the answer short and show only name, summary of their profile, and website link."

    result = chain({"question": input_with_instruction, "chat_history": chat_history_global})
    chat_history_global.append((input_text, result['answer']))

    return jsonify({"response": result['answer']})

if __name__ == "__main__":
    app.run(debug=True, port=8080)

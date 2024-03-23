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

load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
openai.api_key = OPENAI_API_KEY

PERSIST = False
PERSIST_DIRECTORY = "persist"
DATA_DIRECTORY = "data/"

def load_or_create_index():
    if PERSIST and os.path.exists(PERSIST_DIRECTORY):
        vectorstore = Chroma(persist_directory=PERSIST_DIRECTORY, embedding_function=OpenAIEmbeddings())
        return vectorstore
    else:
        loader = DirectoryLoader(DATA_DIRECTORY)
        creator = VectorstoreIndexCreator(
            vectorstore_kwargs={"persist_directory": PERSIST_DIRECTORY}) if PERSIST else VectorstoreIndexCreator()
        return creator.from_loaders([loader]).vectorstore

index = load_or_create_index()

chain = ConversationalRetrievalChain.from_llm(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    retriever=index.as_retriever(search_kwargs={"k": 1}),
)

chat_history_global = []

def chat(input_text):
    global chat_history_global

    if not input_text:
        print("No input provided")
        return
    
    input_with_instruction = f"{input_text}\n\Don't answer until I ask you. So please keep the answer short and show only name, summary of their profile, and website"
    result = chain({"question": input_with_instruction, "chat_history": chat_history_global})
    #result = chain({"question": input_text, "chat_history": chat_history_global})
    chat_history_global.append((input_text, result['answer']))

    print(f"Bot: {result['answer']}")


if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['exit', 'quit', 'bye']:
            break
        chat(user_input)

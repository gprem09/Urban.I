import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    try {
      const response = await axios.post('http://localhost:8080/chat', { input_text: inputText });
      setChatHistory([...chatHistory, { question: inputText, answer: response.data.response }]);
      setInputText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <p><strong>You:</strong> {chat.question}</p>
            <p><strong>Bot:</strong> {chat.answer}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;

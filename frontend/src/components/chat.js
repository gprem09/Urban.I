import React, { useState } from 'react';
import axios from 'axios';

export const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!inputText.trim()) return;

        try {
            const response = await axios.post('http://localhost:8080/chat', { 
                input_text: inputText 
            });
            const reply = response.data.response;

            setChatHistory(chatHistory => [...chatHistory, { question: inputText, answer: reply }]);
            setInputText('');
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    return (
        <div>
            <div>
                {chatHistory.map((chat, index) => (
                    <div key={index} className="chat-message">
                        <p><strong>You:</strong> {chat.question}</p>
                        <p><strong>Bot:</strong> {chat.answer}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-form">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    className="chat-input"
                />
                <button type="submit" className="chat-submit">Send</button>
            </form>
        </div>
    );
};

import React, { useState } from 'react';
import axios from 'axios';
import profiles from './profilesData';

export const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);

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
            const suggestedProfileName = extractProfileName(reply);
            if (suggestedProfileName) {
                const profile = profiles.find(p => p.name.toLowerCase().includes(suggestedProfileName.toLowerCase()));
                setSelectedProfile(profile);
            } else {
                setSelectedProfile(null);
            }
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    const extractProfileName = (reply) => {
        const profileNameMatch = profiles.find(profile => reply.includes(profile.name));
        return profileNameMatch ? profileNameMatch.name : null;
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
            <div className="profiles-container">
                {selectedProfile ? (
                    <div className="profile-card">
                        <h3>{selectedProfile.name}</h3>
                        <p><strong>Country:</strong> {selectedProfile.country}</p>
                        <p>{selectedProfile.profile}</p>
                        <a href={selectedProfile.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                ) : (
                    profiles.map((profile, index) => (
                        <div key={index} className="profile-card">
                            <h3>{profile.name}</h3>
                            <p><strong>Country:</strong> {profile.country}</p>
                            <p>{profile.profile}</p>
                            <a href={profile.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

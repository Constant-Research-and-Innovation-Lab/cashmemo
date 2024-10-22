// src/components/Chatbot.jsx
import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import axios from 'axios';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add user message to the chat
        const newMessage = { text: userInput, sender: 'user' };
        setMessages((prev) => [...prev, newMessage]);

        // Clear the input field
        setUserInput('');

        try {
            // Send a request to the OpenAI API
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo', // Make sure to use a valid model name
                    messages: [
                        ...messages.map((msg) => ({
                            role: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.text,
                        })),
                        { role: 'user', content: userInput }, // Add the current user input
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Use import.meta.env for Vite
                    },
                }
            );

            const botMessage = {
                text: response.data.choices[0].message.content,
                sender: 'bot',
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error fetching data from OpenAI:', error);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button
                onClick={toggleChatbot}
                className="bg-blue-600 rounded-full p-3 shadow-lg text-white"
            >
                <AiOutlineMessage size={30} />
            </button>
            {isOpen && (
                <div className="bg-white shadow-lg rounded-lg p-5 mt-2 w-80">
                    <h2 className="font-bold mb-2">Chat with us!</h2>
                    <div className="overflow-y-auto max-h-60 mb-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
                                <p className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="flex">
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="border border-gray-300 rounded-lg flex-grow p-2 mr-2"
                        />
                        <button type="submit" className="bg-blue-600 text-white rounded-lg px-4">
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

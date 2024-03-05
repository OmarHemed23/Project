import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
import ChatInput from "../../components/ChatInput";

export default function TenantTalk() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleMessageSend = () => {
        if (inputMessage.trim() !== '') {
            const newMessage = {
                text: inputMessage,
                sender: 'Me', // For simplicity, assuming sender is always 'Me'
                timestamp: new Date().toISOString() // Add timestamp to messages
            };
            setMessages([...messages, newMessage]);
            setInputMessage('');
        }
    };

    return (
        <>
            <div className="flex h-screen bg-white border border-gray-300">
                {/* Sidebar */}
                <div className="w-1/4 border-r border-gray-300">
                    <div className="h-2/4 bg-white rounded-b-lg">
                        <Header pageName="Recent Messages" className="border-b" />
                        {/* Display recent messages or contacts */}
                        <ul className="">
                            {/* Sample recent messages */}
                            <li>Contact 1</li>
                            <li>Contact 2</li>
                            <li>Contact 3</li>
                        </ul>
                    </div>
                </div>   
                {/* Chat area */}
                <div className="flex-1 flex flex-col">
                    <Header pageName="Chat Room" />
                    <div className="flex flex-col flex-1 bg-white border-t border-gray-300 p-4 overflow-y-auto scrollbar-none scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-transparent hover:scrollbar">
                        {/* Display messages */}
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender === 'Me' ? 'sent' : 'received'}`}>
                                <div className="message-text">{message.text}</div>
                                <div className="message-timestamp">{message.timestamp}</div>
                            </div>
                        ))}
                    </div>
                    {/* Message input */}
                    <div className="flex items-center mt-4">
                        <form action="">
                            <ChatInput />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


                




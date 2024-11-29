import React from 'react';
import Discussions from '../components/Discussions';
import Chat from '../components/Chat';
import Header from '../components/Header';
import './ChatPage.css';

const ChatPage = () => {
    return (
        <div className="chat-page">
            <Header />
            <div className="chat-container">
                <Discussions className="discussions" />
                <Chat className="chat" />
            </div>
        </div>
    );
};

export default ChatPage;
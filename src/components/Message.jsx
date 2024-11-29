import React from 'react';
import PropTypes from 'prop-types';
import './message.css'; // Assuming you have some CSS for styling

const Message = ({ text, sender, timestamp }) => {
    return (
        <div className="message">
            <div className="message-header">
                <span className="message-sender">{sender}</span>
                <span className="message-timestamp">{new Date(timestamp).toLocaleTimeString()}</span>
            </div>
            <div className="message-body">
                {text}
            </div>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
};

export default Message;
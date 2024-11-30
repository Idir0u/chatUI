import React, { useEffect, useState } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [client, setClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/messages', (msg) => {
        setMessages((prevMessages) => [...prevMessages, JSON.parse(msg.body)]);
      });
    });
    setClient(stompClient);
    return () => {
      if (client) {
        client.disconnect();
      }
    };
  }, []);

  const sendMessage = () => {
    if (client) {
      client.send('/app/chat', {}, JSON.stringify({ content: message }));
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.content}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
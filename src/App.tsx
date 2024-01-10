import React, { useState } from 'react';
import './App.css';


const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
      // Logic to send message to OpenAI and receive response
  };


    return (
      <div className="App">
      <div className="chat-container">
      <div className="chat-window">
            {/* messages && {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                    {message.text}
                </div>
            ))} */}
        </div>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleSend}>Send </button>
      </div>
      </div>
    );
}

export default App;

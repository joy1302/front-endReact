// src/hooks/useChat.js
import { useState } from "react";

export const useChat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message }]);
  };

  const tagUser = (username) => {
    const newMessage = `${messages[messages.length - 1].text} ${username}`;
    setMessages([...messages.slice(0, -1), { text: newMessage }]);
  };

  const executeCommand = (command, args) => {
    switch (command) {
      case "/mute":
        // Implement mute logic
        break;
      case "/ban":
        // Implement ban logic
        break;
      case "/title":
        // Implement title logic
        break;
      case "/description":
        // Implement description logic
        break;
      default:
        break;
    }
  };

  return [messages, sendMessage, tagUser, executeCommand];
};

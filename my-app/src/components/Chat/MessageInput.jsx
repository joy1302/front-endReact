// src/components/Chat/MessageInput.jsx
import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from "./EmojiPicker";
import UserPicker from "./UserPicker";
import { parseEmoji } from "../../utils/helpers";

const MessageInput = ({ onSendMessage, onTagUser, onExecuteCommand }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showUserPicker, setShowUserPicker] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
        setShowUserPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setMessage(inputValue);

    if (inputValue.startsWith(":")) {
      setShowEmojiPicker(true);
    } else if (inputValue.startsWith("@")) {
      setShowUserPicker(true);
    } else if (inputValue.startsWith("/")) {
      const [command, ...args] = inputValue.slice(1).split(" ");
      onExecuteCommand(command, args);
    }
  };

  const handleEmojiSelect = (emoji) => {
    const newMessage = message.replace(/:(\w*)?$/, `${emoji} `);
    setMessage(newMessage);
    setShowEmojiPicker(false);
  };

  const handleUserSelect = (username) => {
    const newMessage = `${message} ${username}`;
    setMessage(newMessage);
    setShowUserPicker(false);
  };

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div ref={inputRef}>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      {showEmojiPicker && <EmojiPicker onEmojiSelect={handleEmojiSelect} />}
      {showUserPicker && <UserPicker onUserSelect={handleUserSelect} />}
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;

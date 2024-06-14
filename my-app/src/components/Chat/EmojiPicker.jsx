// src/components/Chat/EmojiPicker.jsx
import React from "react";
import { Picker } from "emoji-mart";

const EmojiPicker = ({ onEmojiSelect }) => {
  const handleEmojiSelect = (emoji) => {
    onEmojiSelect(emoji.native);
  };

  return (
    <div>
      <Picker onEmojiSelect={handleEmojiSelect} />
    </div>
  );
};

export default EmojiPicker;

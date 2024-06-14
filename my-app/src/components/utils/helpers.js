// src/utils/helpers.js
import browserImageCompression from "browser-image-compression";
import axios from "axios";

// Parse emojis in the message text
export const parseEmoji = (text) => {
  const emojiRegex = /:([\w-]+):/g;
  return text.replace(emojiRegex, (match, emojiName) => {
    const emojiUrl = `https://example.com/emojis/${emojiName}.png`;
    return `<img src="${emojiUrl}" alt="${emojiName}" />`;
  });
};

// Compress image before upload
export const compressImage = async (file) => {
  const options = {
    maxSizeMB: 0.55, // Compress to a maximum of 550KB
    maxWidthOrHeight: 1920, // Compress to a maximum width or height of 1920 pixels
    useWebWorker: true, // Use Web Worker for compression
  };

  try {
    const compressedFile = await browserImageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Error compressing image:", error);
    return null;
  }
};

// Upload compressed image to server
export const uploadImage = async (compressedImage) => {
  const formData = new FormData();
  formData.append("image", compressedImage);

  try {
    const response = await axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

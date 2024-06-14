// src/hooks/useProfilePicture.js
import { useState } from "react";
import { compressImage, uploadImage } from "../utils/helpers";

export const useProfilePicture = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageUpload = async (file) => {
    const compressedImage = await compressImage(file);
    setImage(compressedImage);
  };

  const handleCropImage = async (croppedImageData) => {
    const uploadedImage = await uploadImage(croppedImageData);
    setCroppedImage(uploadedImage);
  };

  return [image, croppedImage, handleImageUpload, handleCropImage];
};

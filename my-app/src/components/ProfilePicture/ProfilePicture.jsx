// src/components/ProfilePicture/ProfilePicture.jsx
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImageCropper from "./ImageCropper";
import Modal from "../Modal/Modal";
import { useProfilePicture } from "../hooks/useProfilePicture";

const ProfilePicture = () => {
  const [image, croppedImage, handleImageUpload, handleCropImage] =
    useProfilePicture();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Edit Profile Picture</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <ImageUpload onImageUpload={handleImageUpload} />
        {image && <ImageCropper image={image} onCropImage={handleCropImage} />}
        {croppedImage && <img src={croppedImage} alt="Cropped Profile" />}
      </Modal>
    </div>
  );
};

export default ProfilePicture;

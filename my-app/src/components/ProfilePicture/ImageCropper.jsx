// src/components/ProfilePicture/ImageCropper.jsx
import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const [zoom, setZoom] = useState(1);

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  const handleCropComplete = (croppedAreaPixels) => {
    onCropImage(croppedAreaPixels);
  };

  return (
    <div>
      <Cropper
        image={URL.createObjectURL(image)}
        crop={crop}
        zoom={zoom}
        onCropChange={handleCropChange}
        onZoomChange={handleZoomChange}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
};

export default ImageCropper;

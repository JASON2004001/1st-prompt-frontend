// src/components/ImageSection.jsx
import React from "react";

const ImageSection = ({ image, title, para }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={image}
        alt={title}
        className="rounded shadow w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm">{para}</p>
      </div>
    </div>
  );
};

export default ImageSection;

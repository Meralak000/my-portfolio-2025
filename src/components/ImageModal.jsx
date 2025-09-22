import React from 'react';

// Simple Image modal component. Pass `src` and `alt` to display an image.
const ImageModal = ({ isOpen, onClose, src, alt }) => {
  if (!isOpen || !src) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={onClose}>
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[10001] text-white bg-black bg-opacity-30 p-2 rounded-full"
        aria-label="Close image view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="max-h-[90vh] max-w-[90vw] p-4" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || 'enlarged image'} className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg" />
      </div>
    </div>
  );
};

export default ImageModal;


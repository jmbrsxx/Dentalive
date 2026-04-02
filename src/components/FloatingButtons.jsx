import React from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a 
        href="https://wa.me/5151999999999" 
        className="floating-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a 
        href="tel:5151999999999" 
        className="floating-btn call-btn"
        aria-label="Ligar"
      >
        <i className="fas fa-phone"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;

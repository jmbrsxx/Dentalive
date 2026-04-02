import React from 'react';
import './FinalCTA.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FinalCTA = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section className={`final-cta fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="final-cta-container">
        <h2 className="final-cta-title">
          <i className="fas fa-tools"></i>
          Solucione seu vazamento hoje mesmo
        </h2>
        <p className="final-cta-subtitle">
          Agende uma visita técnica e evite prejuízos com água e infiltrações
        </p>
        <div className="final-cta-buttons">
          <a href="#contact" className="cta-primary">
            <i className="fas fa-calendar-alt"></i> Agendar Consulta
          </a>
          <a 
            href="https://wa.me/5551993111020" 
            className="cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

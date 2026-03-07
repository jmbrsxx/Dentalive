import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-star">⭐</span>
          <span>5,0 estrelas</span>
          <span className="badge-divider">•</span>
          <span>Profissionais qualificados</span>
        </div>
        <h1 className="hero-title">
          Seu sorriso em <span className="highlight">boas mãos</span>
        </h1>
        <p className="hero-subtitle">
          Atendimento odontológico moderno e humanizado no centro de Canoas.
        </p>
        <div className="hero-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">⭐</span>
            <span>5,0 estrelas no Google</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🦷</span>
            <span>Profissionais qualificados</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">❄️</span>
            <span>Ambiente climatizado</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">📍</span>
            <span>Ao lado do trem, fácil acesso</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a 
            href="https://wa.me/5551991249202" 
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon">📞</span>
            Agendar consulta no WhatsApp
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span className="btn-icon">📍</span>
            Ver localização
          </a>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=500&fit=crop" 
              alt="Clínica DentaLive - Atendimento odontológico" 
              className="hero-tooth-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

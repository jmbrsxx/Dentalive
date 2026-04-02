import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-star"><i className="fas fa-star"></i></span>
          <span>5,0 estrelas</span>
          <span className="badge-divider">•</span>
          <span>Atendimento emergencial 24h</span>
        </div>
        <h1 className="hero-title">
          Seu encanamento em <span className="highlight">boas mãos</span>
        </h1>
        <p className="hero-subtitle">
          Serviço de encanador profissional em Canoas: consertos, manutenção e instalação rápida.
        </p>
        <div className="hero-highlights">
          <div className="highlight-item">
            <span className="highlight-icon"><i className="fas fa-star"></i></span>
            <span>5,0 estrelas no Google</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon"><i className="fas fa-wrench"></i></span>
            <span>Profissionais experientes</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon"><i className="fas fa-shower"></i></span>
            <span>Serviço residencial e comercial</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon"><i className="fas fa-bell"></i></span>
            <span>Atendimento 24 horas</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a 
            href="https://wa.me/5151999999999" 
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon"><i className="fab fa-whatsapp"></i></span>
            Chamar no WhatsApp
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span className="btn-icon"><i className="fas fa-map-marker-alt"></i></span>
            Localização
          </a>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <img
              src="https://www.encanadorjoinvillesc.com.br/wp-content/uploads/2021/05/a-720x360.jpg"
              alt="Encanador profissional consertando cano"
              className="hero-tooth-img"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

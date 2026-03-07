import React from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section id="about" className={`about fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=600&fit=crop" 
              alt="Dentista Profissional NovaOdonto" 
              className="about-dentist-img" 
            />
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">Conheça a Clínica DentaLive</h2>
          <p className="about-text">
            A <strong>Clínica DentaLive</strong> foi criada para oferecer um atendimento odontológico de qualidade, com conforto e atenção a cada paciente.
          </p>
          <p className="about-text">
            Localizada no centro de Canoas, dentro da Galeria São Luiz, a clínica conta com um espaço moderno, totalmente climatizado e preparado para proporcionar uma experiência tranquila e segura.
          </p>
          <p className="about-text">
            Nossa equipe é formada por profissionais dedicados, que trabalham com cuidado, tecnologia e atendimento humanizado.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Atendimento humanizado</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Ambiente moderno e climatizado</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Localização estratégica</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

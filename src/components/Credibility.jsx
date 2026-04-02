import React from 'react';
import './Credibility.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Credibility = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section className={`credibility fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="credibility-container">
        <div className="credibility-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="stat-content">
              <span className="stat-value">5,0</span>
              <span className="stat-label">Estrelas no Google</span>
              <div className="stat-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-content">
              <span className="stat-value">147+</span>
              <span className="stat-label">Clientes satisfeitos</span>
            </div>
          </div>
        </div>
        <div className="credibility-quotes">
          <div className="quote-card">
            <p className="quote-text">"Atendimento ágil e serviço impecável. Reparo sem sujeira e rápido."</p>
          </div>
          <div className="quote-card">
            <p className="quote-text">"Recomendo para qualquer emergência hidráulica, equipe muito competente."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;

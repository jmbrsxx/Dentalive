import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <i className="fas fa-wrench"></i>
          EncanadorFix
        </a>
        <ul className="nav-menu">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#differentials">Diferenciais</a></li>
          <li><a href="#testimonials">Avaliações</a></li>
          <li><a href="#contact" className="nav-cta">Agendar Serviço</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

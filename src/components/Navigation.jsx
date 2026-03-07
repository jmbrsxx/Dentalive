import React from 'react';
import './Navigation.css';
import ToothIcon from '../assets/icons/tooth.svg';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <img src={ToothIcon} alt="Logo" className="nav-logo-icon" />
          DentaLive
        </a>
        <ul className="nav-menu">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#differentials">Diferenciais</a></li>
          <li><a href="#testimonials">Avaliações</a></li>
          <li><a href="#contact" className="nav-cta">Agendar Consulta</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

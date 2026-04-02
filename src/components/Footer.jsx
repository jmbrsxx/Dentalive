import React from 'react';
import './Footer.css';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">EncanadorFix</h3>
          <p className="footer-tagline">
            Serviço de encanador rápido e confiável em Canoas.
          </p>
          <div className="footer-contact">
            <p><i className="fas fa-map-marker-alt"></i> Canoas – RS</p>
            <p><i className="fas fa-phone"></i> (51) 99999-9999</p>
          </div>
          <div className="footer-social">
            <a 
              href="https://wa.me/5151999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" />
            </a>
            <a 
              href="https://instagram.com/encanadorfix" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://maps.google.com/?q=R.+Tiradentes+356+Canoas+RS" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Google Maps"
            >
              <i className="fas fa-map-location-dot"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#differentials">Diferenciais</a></li>
            <li><a href="#testimonials">Avaliações</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Contato</h4>
          <ul>
            <li><a href="https://wa.me/5151999999999">WhatsApp</a></li>
            <li><a href="https://instagram.com/encanadorfix">Instagram</a></li>
            <li><a href="https://maps.google.com/?q=R.+Tiradentes+356+Canoas+RS">Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EncanadorFix. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

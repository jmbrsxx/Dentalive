import React from 'react';
import './Footer.css';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Clínica DentaLive</h3>
          <p className="footer-tagline">
            Atendimento odontológico moderno e humanizado em Canoas.
          </p>
          <div className="footer-contact">
            <p>📍 Canoas – RS</p>
            <p>📞 (51) 99124-9202</p>
          </div>
          <div className="footer-social">
            <a 
              href="https://wa.me/5551991249202" 
              target="_blank" 
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" />
            </a>
            <a 
              href="https://instagram.com/dentalive" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
            >
              📷
            </a>
            <a 
              href="https://maps.google.com/?q=R.+Tiradentes+356+Canoas+RS" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Google Maps"
            >
              📍
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
            <li><a href="https://wa.me/5551991249202">WhatsApp</a></li>
            <li><a href="https://instagram.com/dentalive">Instagram</a></li>
            <li><a href="https://maps.google.com/?q=R.+Tiradentes+356+Canoas+RS">Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Clínica DentaLive. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

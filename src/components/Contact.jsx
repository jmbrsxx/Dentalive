import React from 'react';
import './Contact.css';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado! Em breve entraremos em contato.');
  };

  return (
    <section id="contact" className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="contact-container">
        <h2 className="contact-title">Solicite um Orçamento</h2>
        <p className="contact-subtitle">
          Fale conosco e agende visita técnica para conserto ou instalação
        </p>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon"><i className="fas fa-map-marker-alt"></i></span>
              <div>
                <h4>Endereço</h4>
                <p>R. Tiradentes, 356 – Centro<br />Canoas – RS<br />Galeria São Luiz</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><i className="fas fa-phone"></i></span>
              <div>
                <h4>Telefone / WhatsApp</h4>
                <p>(51) 99999-9999</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><i className="fas fa-clock"></i></span>
              <div>
                <h4>Horário de Funcionamento</h4>
                <p>Segunda a Sexta<br />Sábado abre às 08:00</p>
              </div>
            </div>
            <div className="contact-cta-buttons">
              <a 
                href="https://wa.me/5151999999999" 
                className="cta-btn cta-whatsapp-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Seu nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                placeholder="(51) 99999-9999"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seu@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Serviço de Interesse</label>
              <select id="service" name="service">
                <option value="">Selecione um serviço</option>
                <option value="vazamento">Reparo de Vazamento</option>
                <option value="desentupimento">Desentupimento</option>
                <option value="instalacao">Instalação Hidráulica</option>
                <option value="manutencao">Manutenção Preventiva</option>
                <option value="loucas">Troca de Louças e Metais</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Conte-nos sobre seu serviço de encanamento..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.529137584258!2d-51.1786448!3d-29.9176832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519b4e5a7e8e8e8%3A0x9519b4e5a7e8e8e8!2sR.%20Quinze%20de%20Janeiro%2C%20373%20-%20Centro%2C%20Canoas%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1630000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="350" 
            style={{border: 0, borderRadius: '12px'}} 
            allowFullScreen="" 
            loading="lazy"
            title="Localização"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

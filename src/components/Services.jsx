import React from 'react';
import './Services.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: 'fas fa-wrench',
      title: 'Reparo de Vazamentos',
      description: 'Conserto rápido e definitivo de vazamentos em tubulações, registros e conexões.',
      button: 'Saiba mais'
    },
    {
      icon: 'fas fa-ban',
      title: 'Desentupimento',
      description: 'Desobstrução de pias, ralos, vasos sanitários e caixas de gordura com garantia.',
      button: 'Saiba mais'
    },
    {
      icon: 'fas fa-shower',
      title: 'Instalação Hidráulica',
      description: 'Montagem de sistemas de água fria e quente para residências e comércios.',
      button: 'Saiba mais'
    },
    {
      icon: 'fas fa-home',
      title: 'Manutenção Preventiva',
      description: 'Inspeção completa com troca de peças desgastadas para evitar emergências.',
      button: 'Saiba mais'
    },
    {
      icon: 'fas fa-faucet',
      title: 'Troca de Louças e Metais',
      description: 'Substituição de torneiras, chuveiros, pias e válvulas com serviço limpo e rápido.',
      button: 'Saiba mais'
    },
    {
      icon: 'fas fa-phone',
      title: 'Atendimento 24h',
      description: 'Atendimento de emergência a qualquer hora, todos os dias da semana.',
      button: 'Chamar agora'
    }
  ];

  return (
    <section id="services" className={`services fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>
        <p className="services-subtitle">
          Soluções de encanamento confiáveis para sua casa ou empresa
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-btn">{service.button}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

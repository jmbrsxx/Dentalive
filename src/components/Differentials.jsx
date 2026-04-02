import React from 'react';
import './Differentials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Differentials = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const differentials = [
    {
      icon: 'fas fa-clock',
      title: 'Atendimento 24h',
      description: 'Pronto para resolver seu problema a qualquer hora, incluindo emergências.'
    },
    {
      icon: 'fas fa-home',
      title: 'Serviço residencial e comercial',
      description: 'Atendimento completo para casas, condomínios e empresas.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Garantia de qualidade',
      description: 'Peças e mão de obra garantidas para sua tranquilidade.'
    },
    {
      icon: 'fas fa-star',
      title: 'Equipe experiente',
      description: 'Profissionais certificados e com anos de experiência em hidráulica.'
    }
  ];

  return (
    <section id="differentials" className={`differentials fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="differentials-container">
        <h2 className="differentials-title">Nossos Diferenciais</h2>
        <p className="differentials-subtitle">
          O que nos diferencia nos serviços de encanamento
        </p>
        <div className="differentials-grid">
          {differentials.map((item, index) => (
            <div key={index} className={`differential-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="differential-icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="differential-title">{item.title}</h3>
              <p className="differential-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;

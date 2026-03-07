import React from 'react';
import './Differentials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import HeartIcon from '../assets/icons/heart.svg';
import HomeIcon from '../assets/icons/home.svg';
import StarIcon from '../assets/icons/sparkle.svg';
import TrophyIcon from '../assets/icons/trophy.svg';

const Differentials = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const differentials = [
    {
      icon: HeartIcon,
      title: 'Atendimento humanizado',
      description: 'Cuidamos de cada paciente com atenção e respeito.'
    },
    {
      icon: HomeIcon,
      title: 'Ambiente moderno e climatizado',
      description: 'Conforto desde a recepção até o consultório.'
    },
    {
      icon: StarIcon,
      title: 'Localização estratégica',
      description: 'Fácil acesso próximo ao trem, ônibus e Uber.'
    },
    {
      icon: TrophyIcon,
      title: 'Profissionais qualificados',
      description: 'Equipe preparada para oferecer tratamentos de qualidade.'
    }
  ];

  return (
    <section id="differentials" className={`differentials fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="differentials-container">
        <h2 className="differentials-title">Nossos Diferenciais</h2>
        <p className="differentials-subtitle">
          O que nos diferencia no atendimento odontológico
        </p>
        <div className="differentials-grid">
          {differentials.map((item, index) => (
            <div key={index} className={`differential-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="differential-icon">
                <img src={item.icon} alt={item.title} />
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

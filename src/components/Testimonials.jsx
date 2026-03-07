import React from 'react';
import './Testimonials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const testimonials = [
    {
      name: 'João Vitor Da Silva Elsem',
      text: 'Atendimento incrível, a Dra Lisandra teve o maior cuidado comigo, e bem simpática. O estabelecimento é incrível, recepção perfeita.',
      rating: 5
    },
    {
      name: 'Ionara Io',
      text: 'Experiência excelente! Desde a recepção até o consultório fui muito bem tratada. Ambiente muito limpo e moderno.',
      rating: 5
    },
    {
      name: 'Diogo Alves',
      text: 'Ótima experiência. Atendimento com atenção e qualidade.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className={`testimonials fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="testimonials-container">
        <h2 className="testimonials-title">O que nossos pacientes dizem</h2>
        <p className="testimonials-subtitle">
          Avaliações reais de quem confia no nosso trabalho
        </p>
        <div className="testimonials-rating">
          <span className="rating-stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-value">5,0</span>
          <span className="rating-count">44 avaliações</span>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <a 
            href="https://g.page/r/-/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="google-review-btn"
          >
            ⭐ Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

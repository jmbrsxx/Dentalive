import React from 'react';
import './Testimonials.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const testimonials = [
    {
      name: 'João Vitor',
      text: 'Atendimento rápido e eficaz. Resolveram meu vazamento em menos de 30 minutos.',
      rating: 5
    },
    {
      name: 'Maria Silva',
      text: 'Profissionais educados e serviço excelente. Recomendamos para toda a família.',
      rating: 5
    },
    {
      name: 'Diogo Alves',
      text: 'Muito satisfeito com a instalação do chuveiro e a manutenção geral da casa.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className={`testimonials fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="testimonials-container">
        <h2 className="testimonials-title">O que nossos clientes dizem</h2>
        <p className="testimonials-subtitle">
          Avaliações reais de quem confia no nosso serviço de encanamento
        </p>
        <div className="testimonials-rating">
          <span className="rating-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
          <span className="rating-value">5,0</span>
          <span className="rating-count">44 avaliações</span>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card fade-in-section delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
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
            <i className="fas fa-star"></i> Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

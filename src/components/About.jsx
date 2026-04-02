import React from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section id="about" className={`about fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-placeholder">
            <img
              src="https://tubocanodesentupidora.com.br/wp-content/uploads/2024/06/Servico-de-encanador-Orcamento-4.jpeg"
              alt="Encanador profissional em serviço"
              className="about-dentist-img"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">Conheça a EncanadorFix</h2>
          <p className="about-text">
            A <strong>EncanadorFix</strong> foi criada para oferecer serviço de encanamento de alta qualidade, com rapidez e atenção a cada cliente.
          </p>
          <p className="about-text">
            Atendemos residências e empresas em Canoas e região, com ferramentas modernas e reparos duráveis para vazamentos, entupimentos e instalações.
          </p>
          <p className="about-text">
            Nossa equipe é formada por profissionais experientes, que trabalham com transparência, rapidez e foco na solução efetiva.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-check"><i className="fas fa-check"></i></span>
              <span>Equipe certificada</span>
            </div>
            <div className="feature-item">
              <span className="feature-check"><i className="fas fa-check"></i></span>
              <span>Ferramentas profissionais</span>
            </div>
            <div className="feature-item">
              <span className="feature-check"><i className="fas fa-check"></i></span>
              <span>Localização estratégica</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

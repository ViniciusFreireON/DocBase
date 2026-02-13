import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="lp">
      <main className="lp__main">
        <section className="lp__hero">
          <h1 className="lp__hero-title">
            DocBase
          </h1>
          <p className="lp__hero-desc">
            Documentos de qualquer tipo, organizados em um só lugar.
            Busque, filtre e baixe quando precisar.
          </p>
          <div className="lp__hero-ctas">
            <Link to="/docs" className="lp__cta lp__cta--primary">
              Ver documentos
            </Link>
            <Link to="/login" className="lp__cta lp__cta--secondary">
              Entrar
            </Link>
          </div>
        </section>

        <section className="lp__features">
          <div className="lp__feature">
            <Icon name="folder" className="lp__feature-icon" aria-hidden />
            <h3>Organizado</h3>
            <p>Filtre por tipo e categoria.</p>
          </div>
          <div className="lp__feature">
            <Icon name="search" className="lp__feature-icon" aria-hidden />
            <h3>Busca rápida</h3>
            <p>Encontre qualquer documento.</p>
          </div>
          <div className="lp__feature">
            <Icon name="download" className="lp__feature-icon" aria-hidden />
            <h3>Download</h3>
            <p>Baixe um ou todos em ZIP.</p>
          </div>
        </section>
      </main>

      <footer className="lp__footer">
        <div className="lp__footer-inner">
          <Link to="/" className="lp__footer-logo">DocBase</Link>
          <div className="lp__footer-links">
            <Link to="/docs">Documentos</Link>
            <Link to="/login">Entrar</Link>
            <Link to="/cadastro">Cadastrar</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

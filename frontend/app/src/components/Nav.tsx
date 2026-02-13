import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export function Nav() {
  return (
    <nav className="nav" aria-label="Navegação principal">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          DocBase
        </Link>
        <ul className="nav__links">
          <li>
            <NavLink to="/" className="nav__link" end>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs" className="nav__link">
              Documentos
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload" className="nav__link">
              Enviar arquivos
            </NavLink>
          </li>
          <li>
            <NavLink to="/notas" className="nav__link">
              Notas
            </NavLink>
          </li>
          <li>
            <Link to="/login" className="nav__link nav__link--muted">
              Entrar
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="nav__link nav__link--cta">
              Cadastrar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  showHomeLink?: boolean;
}

export function Header({ showHomeLink }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title">
        {showHomeLink ? (
          <Link to="/" className="header__home-link">DocBase</Link>
        ) : (
          'DocBase'
        )}
      </h1>
      <p className="header__subtitle">
        Notas, documentos e backups. Organize por tipo e categoria.
      </p>
    </header>
  );
}

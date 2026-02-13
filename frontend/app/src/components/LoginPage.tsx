import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    if (!email.trim()) {
      setErro('Digite seu e-mail.');
      return;
    }
    if (!senha) {
      setErro('Digite sua senha.');
      return;
    }
    // TODO: integrar com backend de autenticação
    alert('Login em desenvolvimento. Em breve!');
  };

  return (
    <div className="auth-page">
      <div className="auth-page__card">
        <h1 className="auth-page__title">Entrar</h1>
        <p className="auth-page__subtitle">Acesse sua conta DocBase</p>

        <form onSubmit={handleSubmit} className="auth-page__form">
          {erro && <p className="auth-page__erro">{erro}</p>}
          <div className="auth-page__field">
            <label htmlFor="login-email">E-mail</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              autoComplete="email"
            />
          </div>
          <div className="auth-page__field">
            <label htmlFor="login-senha">Senha</label>
            <input
              id="login-senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="auth-page__btn">
            Entrar
          </button>
        </form>

        <p className="auth-page__footer">
          Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

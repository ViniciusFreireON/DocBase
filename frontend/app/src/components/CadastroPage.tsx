import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

export function CadastroPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    if (!nome.trim()) {
      setErro('Digite seu nome.');
      return;
    }
    if (!email.trim()) {
      setErro('Digite seu e-mail.');
      return;
    }
    if (!senha) {
      setErro('Digite uma senha.');
      return;
    }
    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (senha !== confirmarSenha) {
      setErro('As senhas não conferem.');
      return;
    }
    // TODO: integrar com backend
    alert('Cadastro em desenvolvimento. Em breve!');
  };

  return (
    <div className="auth-page">
      <div className="auth-page__card">
        <h1 className="auth-page__title">Criar conta</h1>
        <p className="auth-page__subtitle">Cadastre-se no DocBase</p>

        <form onSubmit={handleSubmit} className="auth-page__form">
          {erro && <p className="auth-page__erro">{erro}</p>}
          <div className="auth-page__field">
            <label htmlFor="cadastro-nome">Nome</label>
            <input
              id="cadastro-nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              autoComplete="name"
            />
          </div>
          <div className="auth-page__field">
            <label htmlFor="cadastro-email">E-mail</label>
            <input
              id="cadastro-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              autoComplete="email"
            />
          </div>
          <div className="auth-page__field">
            <label htmlFor="cadastro-senha">Senha</label>
            <input
              id="cadastro-senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              autoComplete="new-password"
            />
          </div>
          <div className="auth-page__field">
            <label htmlFor="cadastro-confirmar">Confirmar senha</label>
            <input
              id="cadastro-confirmar"
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Repita a senha"
              autoComplete="new-password"
            />
          </div>
          <button type="submit" className="auth-page__btn">
            Cadastrar
          </button>
        </form>

        <p className="auth-page__footer">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

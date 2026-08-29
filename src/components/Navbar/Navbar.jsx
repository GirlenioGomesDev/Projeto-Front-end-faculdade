import { NavLink } from 'react-router-dom';
import './Navbar.css';

/*
=================================================
COMPONENTE: Navbar
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Permitir navegacao entre as paginas principais sem recarregar a aplicacao.

O QUE JA ESTA PRONTO:
Links para Home, Cadastros, Mapa e Agendamento usando NavLink.

O QUE FALTA:
Melhorar o estilo da rota ativa e testar o menu em telas pequenas.

CONCEITOS:
React Router, NavLink, rota ativa e componente reutilizavel.
=================================================
*/

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegacao principal">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cadastros">Cadastros</NavLink>
      <NavLink to="/mapa">Mapa</NavLink>
      <NavLink to="/agendamento">Agendamento</NavLink>
    </nav>
  );
}

export default Navbar;

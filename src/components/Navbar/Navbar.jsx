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

/*
=================================================
GUIA PETNEAR - NAVBAR

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
Garantir navegacao completa entre Home, Cadastros, Mapa e
Agendamento.

COMECE POR:
Clique em todos os links e confirme que nenhuma pagina exige URL
digitada manualmente.

DEPOIS:
Observe se o usuario consegue entender em qual area esta.

DICA:
A navegacao e parte da experiencia, nao apenas um detalhe visual.

CONCEITOS PARA ESTUDAR:
- React Router
- links de navegacao
- rota ativa

NAO ESCREVA A SOLUCAO.
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

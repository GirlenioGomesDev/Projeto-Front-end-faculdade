import Navbar from '../Navbar/Navbar.jsx';
import './Header.css';

/*
=================================================
COMPONENTE: Header
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Mostrar o topo fixo da aplicacao e agrupar a navegacao.

O QUE JA ESTA PRONTO:
Nome do projeto e chamada do componente Navbar.

O QUE FALTA:
Adicionar logo final, revisar acessibilidade e ajustar detalhes visuais.

CONCEITOS:
componentes, composicao e CSS.
=================================================
*/

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/">
          PetNear
        </a>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;

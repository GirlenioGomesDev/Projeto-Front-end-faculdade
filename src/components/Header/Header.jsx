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

/*
=================================================
GUIA PETNEAR - HEADER

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
Manter identidade do projeto e acesso claro a navegacao principal.

COMECE POR:
Verifique se o nome PetNear aparece de forma clara e se o menu
esta facil de encontrar.

DEPOIS:
Teste em uma largura menor de tela para observar se os links
continuam utilizaveis.

DICA:
O Header agrupa componentes. Ao ajustar visual, confira tambem
o Navbar.

NAO ESCREVA A SOLUCAO.
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

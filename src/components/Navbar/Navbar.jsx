import { NavLink } from 'react-router-dom';
import './Navbar.css';

/*
=================================================
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: Navbar.jsx

RESPONSAVEL: BIANKA
NIVEL: FACIL

REQUISITO DA AV2:
Exibir acesso coerente para login/logout e deixar claro quando uma
rota exige autenticacao.

OBJETIVO:
Orientar os ajustes visuais da navegacao sem alterar as rotas da
AV1 antes da autenticacao existir.

O QUE JA ESTA PRONTO:
Links para Home, Mapa, Agendamento e Cadastro usando NavLink.

O QUE FALTA FAZER:
1. Depois que Leno criar autenticacao, exibir Login ou Logout.
2. Evitar mostrar acoes que nao funcionam.
3. Manter o menu legivel em celular.

ONDE MODIFICAR:
Dentro do <nav>, adicionando links ou botoes condicionais quando a
sessao estiver disponivel.

ANTES DE COMEÇAR:
Entenda NavLink, rota ativa e renderizacao condicional.

DICA:
Bianka cuida do visual; Leno deve fornecer o estado de sessao para
nao misturar logica de autenticacao aqui.

COMO TESTAR:
1. Navegue logado e deslogado.
2. Confira se a rota ativa aparece corretamente.
3. Teste em largura de celular.

CUIDADOS:
Nao coloque senha, token ou chamada fetch dentro da Navbar.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

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
    <NavLink to="/mapa">Mapa</NavLink>
    <NavLink to="/agendamento">Agendamento</NavLink>
    <NavLink to="/cadastros">Cadastro</NavLink>
    {/* AV2 - RESPONSAVEL: BIANKA COM APOIO DE LENO
    NIVEL: FACIL NO VISUAL, DIFICIL NA LOGICA
    TODO: Quando existir autenticacao, mostrar Login ou Logout aqui.
    DICA: a Navbar deve apenas chamar funcoes prontas da camada de auth. */}
    </nav>
  );
}

export default Navbar;

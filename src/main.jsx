import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

/*
=================================================
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: main.jsx

RESPONSAVEL: LENO
NIVEL: DIFICIL

REQUISITO DA AV2:
Seções 7.2 e 7.4 do PDF: preservar a sessao apos atualizar a
pagina e preparar a aplicacao para autenticar rotas sem espalhar
logica por varios componentes.

OBJETIVO:
Indicar o ponto de entrada onde um provedor de autenticacao podera
envolver o App quando a equipe criar essa estrutura.

O QUE JA ESTA PRONTO:
O React e o BrowserRouter ja estao configurados para toda a
aplicacao.

O QUE FALTA FAZER:
1. Criar a estrategia de sessao depois que a API for aprovada.
2. Decidir se sera usado Context API ou um hook reutilizavel.
3. Envolver o App com o provedor apenas quando ele existir e for
   testado.

ONDE MODIFICAR:
Ao redor de <App />, mantendo <BrowserRouter> como roteador
principal.

ANTES DE COMEÇAR:
Entenda StrictMode, BrowserRouter e o papel de providers em React.

DICA:
Este arquivo nao deve ter regra de login. Ele apenas conecta o
provedor ao aplicativo.

COMO TESTAR:
1. Execute o app.
2. Faca login.
3. Atualize a pagina e confirme se o estado de sessao voltou.

CUIDADOS:
Nao mova regras de formulario, fetch ou validacao para este arquivo.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

/*
=================================================
GUIA PETNEAR - ENTRADA DA APLICACAO

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
Demonstrar uma aplicacao React organizada, com rotas funcionando
atraves do React Router.

ANTES DE COMEÇAR:
Entenda que este arquivo apenas liga o React ao HTML e envolve
o aplicativo com o roteador.

DICA:
Se alguma pagina nao abrir, investigue primeiro os links e as
rotas no App antes de mexer neste arquivo.

COMO TESTAR:
Execute o projeto e navegue pelas paginas principais usando o
menu, sem digitar URL manualmente.

NAO ESCREVA A SOLUCAO AQUI.
=================================================
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* AV2 - RESPONSAVEL: LENO
      NIVEL: DIFICIL
      TODO: Quando AuthProvider existir, ele podera envolver <App /> aqui.
      TESTE: atualizar a pagina nao deve apagar uma sessao valida. */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);

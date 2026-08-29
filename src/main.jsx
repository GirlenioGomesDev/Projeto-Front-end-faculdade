import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

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
      <App />
    </BrowserRouter>
  </StrictMode>,
);

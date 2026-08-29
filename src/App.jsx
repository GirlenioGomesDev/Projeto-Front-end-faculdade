import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Cadastros from './pages/Cadastros/Cadastros.jsx';
import Mapa from './pages/Mapa/Mapa.jsx';
import Agendamento from './pages/Agendamento/Agendamento.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

/*
=================================================
GUIA PETNEAR - ROTAS DA AV1

RESPONSAVEIS:
LENO - DIFICIL
ANITA - MEDIO
BIANKA - LEVE

REQUISITO DA AV1:
Manter pelo menos 3 rotas uteis e garantir navegacao completa
sem o usuario precisar digitar enderecos manualmente.

ANTES DE COMEÇAR:
Abra cada pagina importada acima e entenda qual parte do fluxo
ela representa: Home, Cadastros, Mapa e Agendamento.

COMECE POR:
Verificar se todos os links da interface levam para uma dessas
rotas principais.

DEPOIS:
Teste uma rota que nao existe para confirmar se a pagina
NotFound aparece em vez de uma tela vazia.

DICA:
Este arquivo organiza o caminho geral do aplicativo. Nao comece
por ele para implementar regras de negocio; use-o apenas para
entender como as paginas se conectam.

NAO ESCREVA A SOLUCAO AQUI.
=================================================
*/

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

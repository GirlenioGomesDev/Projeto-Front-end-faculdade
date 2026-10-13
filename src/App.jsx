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
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: App.jsx

RESPONSAVEL: LENO
NIVEL: DIFICIL

REQUISITO DA AV2:
Seções 7.2 e 7.4 do PDF: implementar autenticacao, sessao
preservada, logout, tratamento de HTTP 401/403 e pelo menos uma
rota protegida.

OBJETIVO:
Organizar as rotas principais do aplicativo e indicar onde
entrara a protecao de acesso quando a autenticacao estiver pronta.

O QUE JA ESTA PRONTO:
A AV1 possui rotas para Home, Cadastros, Mapa, Agendamento e
NotFound, com Header e Footer fixos em volta das paginas.

O QUE FALTA FAZER:
1. Definir qual rota sera protegida, provavelmente /agendamento.
2. Criar a camada de autenticacao antes de proteger qualquer tela.
3. Criar um componente de rota protegida somente depois que a
   sessao estiver sendo recuperada ao atualizar a pagina.
4. Redirecionar usuarios sem sessao valida para a tela de login.
5. Tratar respostas 401 e 403 vindas dos services.

ONDE MODIFICAR:
Nos imports e dentro de <Routes>, envolvendo a rota escolhida com
um componente de protecao criado pela equipe.

ANTES DE COMEÇAR:
Estude React Router, renderizacao condicional, Context API ou um
hook simples de autenticacao.

DICA:
Nao proteja a rota antes do login funcionar. Primeiro faca login,
sessao e logout. Depois aplique a protecao.

COMO TESTAR:
1. Entre sem login e tente abrir a rota protegida.
2. Faca login, atualize a pagina e confirme se a sessao continua.
3. Simule 401/403 no service e confira o redirecionamento.

CUIDADOS:
Nao remova as rotas da AV1 e nao salve senha no localStorage.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

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

          {/* AV2 - RESPONSAVEL: LENO
          NIVEL: DIFICIL
          TODO: Depois que autenticacao e sessao estiverem prontas,
          envolver esta rota com o componente de rota protegida.

          DICA: use esta rota porque o agendamento depende de usuario,
          pet cadastrado e Pet Shop selecionado.

          TESTE: sem login deve redirecionar; com login deve abrir. */}
          <Route path="/agendamento" element={<Agendamento />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

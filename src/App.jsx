import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Cadastros from './pages/Cadastros/Cadastros.jsx';
import Mapa from './pages/Mapa/Mapa.jsx';
import Agendamento from './pages/Agendamento/Agendamento.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

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


import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ autenticado = false, onSair }) {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/mapa">
        Mapa
      </NavLink>

      <NavLink
        to="/agendamento"
        className="navbar__agendamento"
        title={
          autenticado
            ? 'Abrir agendamento'
            : 'Faça login para agendar'
        }
      >
        <span>Agendamento</span>
      </NavLink>

      <NavLink to="/cadastros">
        Cadastro
      </NavLink>

      {autenticado ? (
        <button
          type="button"
          className="navbar__logout"
          onClick={onSair}
        >
          Sair
        </button>
      ) : (
        <NavLink
          to="/login"
          className="navbar__login"
        >
          Entrar
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;

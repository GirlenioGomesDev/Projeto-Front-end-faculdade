import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import { logout } from '../../services/authService.js';
import { getSession } from '../../services/sessionService.js';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState(() => getSession());

  useEffect(() => {
    setSession(getSession());
  }, [location.key]);

  useEffect(() => {
    function atualizarSessao(event) {
      if (event.key === 'petnear_session' || event.key === null) {
        setSession(getSession());
      }
    }

    window.addEventListener('storage', atualizarSessao);

    return () => {
      window.removeEventListener('storage', atualizarSessao);
    };
  }, []);

  function handleLogout() {
    logout();
    setSession(null);
    navigate('/login', { replace: true });
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-header__brand"
          to="/"
          aria-label="PetNear — início"
        >
          PetNear
        </Link>

        <Navbar
          autenticado={Boolean(session?.accessToken)}
          onSair={handleLogout}
        />
      </div>
    </header>
  );
}

export default Header;
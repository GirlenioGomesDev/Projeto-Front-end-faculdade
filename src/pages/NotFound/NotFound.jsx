import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Home,
  MapPinOff,
} from 'lucide-react';

/*
=================================================
PAGINA: NotFound
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Mostrar uma tela quando a rota nao existir.

CONCEITOS:
rota coringa, Link e navegacao.
=================================================
*/

function NotFound() {
  return (
    <section className="page notfound-page">

      <div className="notfound-card">

        <div className="notfound-icon">
          <MapPinOff size={38} />
        </div>

        <span className="section-eyebrow">
          Erro 404
        </span>

        <h1 className="notfound-title">
          Página não encontrada
        </h1>

        <p className="notfound-description">
          Parece que você chegou a um endereço que não existe
          no PetNear. Verifique o caminho ou volte para a página inicial.
        </p>

        <div className="notfound-code">
          404
        </div>

        <div className="notfound-actions">

          <Link
            className="button"
            to="/"
          >
            <Home size={18} />

            Voltar para Home
          </Link>

          <Link
            className="button secondary"
            to="/mapa"
          >
            <ArrowLeft size={18} />

            Ver Pet Shops
          </Link>

        </div>

      </div>

    </section>
  );
}

export default NotFound;
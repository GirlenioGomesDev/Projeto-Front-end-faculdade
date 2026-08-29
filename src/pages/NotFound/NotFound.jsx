import { Link } from 'react-router-dom';

/*
=================================================
PAGINA: NotFound
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Mostrar uma tela simples quando a rota nao existir.

O QUE JA ESTA PRONTO:
Mensagem e link para voltar para Home.

O QUE FALTA:
Melhorar texto e estilo caso a equipe queira.

CONCEITOS:
rota coringa, Link e navegacao.
=================================================
*/

function NotFound() {
  return (
    <section className="page">
      <h1 className="page-title">Pagina nao encontrada</h1>
      <p className="page-description">
        A rota acessada nao existe no PetNear.
      </p>
      <div className="button-row">
        <Link className="button" to="/">
          Voltar para Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

import { Link } from 'react-router-dom';
import './Banner.css';

/*
=================================================
COMPONENTE: Banner
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Apresentar a chamada principal da Home.

O QUE JA ESTA PRONTO:
Texto, imagem local de placeholder e botoes com Link.

O QUE FALTA:
Escolher imagem final e melhorar o acabamento visual.

CONCEITOS:
Link, props simples no futuro, CSS e componente reutilizavel.
=================================================
*/

function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <p className="banner__eyebrow">Cuidado perto de voce</p>
        <h1>Encontre cuidado perto de quem voce ama.</h1>
        <p>
          O PetNear ajuda tutores a encontrar Pet Shops proximos e organizar
          servicos de banho e tosa.
        </p>
        <div className="button-row">
          <Link className="button" to="/cadastros">
            Encontrar um Pet Shop
          </Link>
          <Link className="button secondary" to="/agendamento">
            Agendar agora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;

import {
  MapPin,
  Star,
  Clock3,
  Navigation,
  PawPrint,
  ArrowRight,
} from 'lucide-react';

/*
=================================================
COMPONENTE: PetShopCard
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 1

FUNCAO:
Mostrar um Pet Shop ficticio vindo dos dados locais.

CONCEITOS:
props, map, key estavel, eventos e componente reutilizavel.
=================================================
*/

function PetShopCard({ petShop, onSelecionar }) {

  function selecionarPetShop() {
    onSelecionar(petShop);
  }

  return (
    <article className="card petshop-card">

      {/* CABECALHO */}
      <div className="petshop-card__header">

        <div className="petshop-card__logo">
          <PawPrint size={24} />
        </div>

        <div className="petshop-card__heading">
          <h2>{petShop.nome}</h2>

          <div className="petshop-card__rating">
            <Star
              size={16}
              fill="currentColor"
            />

            <strong>
              {petShop.avaliacao}
            </strong>
          </div>
        </div>

      </div>

      {/* INFORMACOES */}
      <div className="petshop-card__info">

        <div className="petshop-card__info-item">
          <Navigation size={17} />

          <div>
            <span>Distância</span>

            <strong>
              {petShop.distancia}
            </strong>
          </div>
        </div>

        <div className="petshop-card__info-item">
          <MapPin size={17} />

          <div>
            <span>Endereço</span>

            <strong>
              {petShop.endereco} - {petShop.bairro},
              {' '}
              {petShop.cidade}
            </strong>
          </div>
        </div>

        <div className="petshop-card__info-item">
          <Clock3 size={17} />

          <div>
            <span>Horário</span>

            <strong>
              {petShop.horario}
            </strong>
          </div>
        </div>

      </div>

      {/* SERVICOS */}
      <div className="petshop-card__services">
        <span className="petshop-card__services-title">
          Serviços disponíveis
        </span>

        <div className="petshop-card__chips">
          {petShop.servicos.map((servico) => (
            <span
              className="petshop-card__chip"
              key={servico}
            >
              {servico}
            </span>
          ))}
        </div>
      </div>

      {/* ACAO */}
      <div className="petshop-card__footer">
        <button
          className="button petshop-card__button"
          type="button"
          onClick={selecionarPetShop}
        >
          Agendar serviço

          <ArrowRight size={18} />
        </button>
      </div>

    </article>
  );
}

export default PetShopCard;
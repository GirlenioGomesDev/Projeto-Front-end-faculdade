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
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: PetShopCard.jsx

RESPONSAVEIS: LENO E BIANKA
NIVEL: MEDIO

REQUISITO DA AV2:
Exibir dados vindos da API aprovada e validar o formato recebido
antes de renderizar informacoes na tela.

OBJETIVO:
Mostrar um Pet Shop de forma reutilizavel sem assumir que todo dado
remoto sempre vira perfeito.

O QUE JA ESTA PRONTO:
O componente recebe um petShop por props, exibe nome, avaliacao,
distancia, endereco, horario e servicos, e chama onSelecionar.

O QUE FALTA FAZER:
1. Conferir se a API entrega os mesmos campos usados aqui.
2. Adaptar nomes de campos em um service ou mapper, nao no JSX todo.
3. Definir textos seguros para dados ausentes.
4. Manter o visual responsivo com conteudo maior vindo da API.

ONDE MODIFICAR:
Na renderizacao dos campos e, se necessario, em uma funcao auxiliar
fora do JSX.

ANTES DE COMECAR:
Estude props, renderizacao condicional, map e contrato de dados.

DICA:
Se a API usar nomes diferentes, prefira transformar os dados no
service para manter este componente simples.

COMO TESTAR:
1. Renderize um Pet Shop completo.
2. Renderize dados incompletos.
3. Clique em Agendar servico e verifique o fluxo.

CUIDADOS:
Nao coloque fetch dentro deste card.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

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
    // AV2 - RESPONSAVEL: LENO
    // NIVEL: DIFICIL
    // TODO: Se a API exigir id remoto, confirme que petShop.id existe
    // antes de permitir o agendamento.
    //
    // DICA: validacao de dados evita salvar uma escolha quebrada.
    // TESTE: tente selecionar um item com dados incompletos.
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
          {/* AV2 - RESPONSAVEL: BIANKA
          NIVEL: FACIL
          TODO: Conferir se muitos servicos vindos da API continuam
          quebrando linha de forma organizada no card.
          TESTE: usar uma lista pequena e uma lista maior de servicos. */}
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

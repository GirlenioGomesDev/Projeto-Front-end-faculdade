/*
=================================================
COMPONENTE: PetShopCard
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 1

FUNCAO:
Mostrar um Pet Shop ficticio vindo dos dados locais.

O QUE JA ESTA PRONTO:
Estrutura visual recebendo petShop por props.

O QUE FALTA:
Enviar funcao de clique para selecionar o Pet Shop e navegar.

CONCEITOS:
props, map, key estavel, eventos e componente reutilizavel.
=================================================
*/

function PetShopCard({ petShop }) {
  return (
    <article className="card">
      <h2>{petShop.nome}</h2>
      <p>
        <strong>Distancia:</strong> {petShop.distancia}
      </p>
      <p>
        <strong>Avaliacao:</strong> {petShop.avaliacao}
      </p>
      <p>
        <strong>Endereco:</strong> {petShop.endereco} - {petShop.bairro}, {petShop.cidade}
      </p>
      <p>
        <strong>Horario:</strong> {petShop.horario}
      </p>
      <p>
        <strong>Servicos:</strong> {petShop.servicos.join(', ')}
      </p>
      <button className="button" type="button">
        Agendar banho e tosa
      </button>

      {/* =================================================
      TODO AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 1

      OBJETIVO:
      Fazer o card avisar a pagina Mapa qual Pet Shop foi escolhido.

      O QUE VOCE DEVE FAZER:
      1. Receber uma prop chamada onSelecionar.
      2. Criar uma funcao para o clique.
      3. Enviar petShop.id ou o objeto petShop para o componente pai.
      4. Na pagina Mapa, estudar useNavigate para abrir /agendamento.

      CONCEITOS:
      props
      eventos
      useNavigate
      comunicacao entre componentes

      COMO TESTAR:
      Clique em Pet Shops diferentes e confira qual foi selecionado.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}
    </article>
  );
}

export default PetShopCard;

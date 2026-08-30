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

/*
=================================================
GUIA PETNEAR - CARD DE PET SHOP

RESPONSAVEL: LENO
NIVEL: MEDIO PARA DIFICIL

REQUISITO DA AV1:
Este componente apoia a listagem de dados locais, o uso de props,
componentes reutilizaveis e a selecao de um Pet Shop.

ANTES DE COMEÇAR:
Compare varios Pet Shops nos dados locais e perceba quais
informacoes mudam de um estabelecimento para outro.

COMECE POR:
Entenda quais dados chegam ao card e quais partes visuais se
repetem para todos os estabelecimentos.

DEPOIS:
Pense no clique do botao como uma pergunta: qual Pet Shop foi
escolhido e qual tela precisara saber disso depois?

QUANDO ISSO FUNCIONAR:
Conecte a selecao ao fluxo do Mapa, mas apenas depois que a
listagem e o filtro estiverem compreendidos.

DICA:
Props ajudam a evitar repeticao. O card deve continuar generico
e reutilizavel.

CONCEITOS PARA ESTUDAR:
- props
- eventos
- componentes reutilizaveis
- comunicacao entre componente filho e componente pai

COMO TESTAR:
Observe se cards diferentes mostram dados diferentes e se o
clique permite identificar o item correto.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function PetShopCard({ petShop, onSelecionar }) {
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
      <button className="button"
        type="button"
        onClick={() => onSelecionar(petShop)}>
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

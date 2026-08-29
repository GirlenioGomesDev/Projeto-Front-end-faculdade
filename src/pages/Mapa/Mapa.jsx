import EmptyState from '../../components/EmptyState/EmptyState.jsx';
import PetShopCard from '../../components/PetShopCard/PetShopCard.jsx';
import petshops from '../../data/petshops.json';

/*
=================================================
PAGINA: Mapa
NIVEL: DIFICIL
RESPONSAVEL SUGERIDO: PESSOA 1

FUNCAO:
Simular um mapa e listar Pet Shops ficticios proximos.

O QUE JA ESTA PRONTO:
Area visual de mapa simulado, filtro visual e listagem inicial.

O QUE FALTA:
Filtro por servico, selecao do Pet Shop e navegacao para agendamento.

CONCEITOS:
useState, map, filter, includes, props, key e useNavigate.
=================================================
*/

/*
=================================================
GUIA PETNEAR - MAPA E PET SHOPS

RESPONSAVEL: LENO
NIVEL: DIFICIL

REQUISITO DA AV1:
Esta pagina concentra a listagem de dados locais, o filtro
controlado por estado, a mensagem de lista vazia e a selecao
do Pet Shop.

ANTES DE COMEÇAR:
Abra o arquivo de dados dos Pet Shops e observe quais campos
existem, quais servicos cada estabelecimento oferece e qual
informacao identifica cada item.

COMECE POR:
Antes de pensar em filtro, confirme que todos os Pet Shops dos
dados locais aparecem corretamente na tela.

DEPOIS:
Escolha apenas uma opcao de filtro para estudar o comportamento.
Quando essa opcao funcionar, avance para as demais.

QUANDO ISSO FUNCIONAR:
Provoque uma situacao sem resultado e planeje a mensagem de
lista vazia. Esse ponto ajuda diretamente em um requisito da AV1.

DICA:
Pergunte sempre: qual informacao muda quando o usuario escolhe
um servico? A resposta indica o que precisa ser acompanhado pela
tela.

CONCEITOS PARA ESTUDAR:
- arrays
- listagem
- props
- estado
- eventos
- filtros
- navegacao

COMO TESTAR:
Compare a tela com os dados locais, altere o filtro e observe
se a lista muda de forma previsivel.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function Mapa() {
  const petshopsVisiveis = petshops;

  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Mapa simulado</h1>
        <p className="page-description">
          Na AV1 esta tela usa dados locais. A integracao real com mapa fica
          preparada apenas como ideia para a AV2.
        </p>
      </header>

      <div className="placeholder-box">
        <div>
          <h2>MAPA SIMULADO</h2>
          <p>Integracao real ficara para AV2.</p>
        </div>
      </div>

      <section className="section-band">
        <div className="toolbar">
          <select aria-label="Filtrar por servico" defaultValue="">
            <option value="">Todos</option>
            <option value="Banho">Banho</option>
            <option value="Tosa">Tosa</option>
            <option value="Banho + Tosa">Banho + Tosa</option>
            <option value="Higiene">Higiene</option>
          </select>
        </div>

        {/* =================================================
        TODO AV1
        NIVEL: DIFICIL
        RESPONSAVEL SUGERIDO: PESSOA 1

        OBJETIVO:
        Filtrar Pet Shops pelo servico selecionado.

        O QUE VOCE DEVE FAZER:
        1. Importar useState.
        2. Criar estado filtroServico.
        3. Ligar o select ao estado com value e onChange.
        4. Usar filter() no array de Pet Shops.
        5. Usar includes() no array servicos de cada Pet Shop.
        6. Mostrar EmptyState quando a lista ficar vazia.

        CONCEITOS:
        useState
        filter
        includes
        renderizacao condicional
        eventos

        COMO TESTAR:
        Escolha um servico e veja se apenas Pet Shops compativeis aparecem.

        RESULTADO ESPERADO:
        A lista deve mudar conforme o filtro.

        NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
        ================================================= */}

        {petshopsVisiveis.length > 0 ? (
          <div className="grid">
            {petshopsVisiveis.map((petShop) => (
              <PetShopCard key={petShop.id} petShop={petShop} />
            ))}
          </div>
        ) : (
          <EmptyState
            titulo="Nenhum Pet Shop encontrado para esse servico"
            mensagem="Depois, esta mensagem devera aparecer apenas quando o filtro nao tiver resultados."
          />
        )}
      </section>

      {/* =================================================
      TODO AV1
      NIVEL: DIFICIL
      RESPONSAVEL SUGERIDO: PESSOA 1

      OBJETIVO:
      Selecionar um Pet Shop e navegar para /agendamento.

      O QUE VOCE DEVE FAZER:
      1. Criar funcao para receber o Pet Shop escolhido.
      2. Usar find() se receber apenas o id.
      3. Guardar o Pet Shop selecionado em estado ou localStorage.
      4. Usar useNavigate para abrir /agendamento.

      CONCEITOS:
      useState
      find()
      evento de clique
      useNavigate
      objeto selecionado

      COMO TESTAR:
      Clique em "Agendar banho e tosa".

      RESULTADO ESPERADO:
      O fluxo deve seguir para a pagina de agendamento.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}
    </section>
  );
}

export default Mapa;

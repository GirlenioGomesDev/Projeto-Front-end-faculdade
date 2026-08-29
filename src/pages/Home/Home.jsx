import Banner from '../../components/Banner/Banner.jsx';
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx';
import BenefitCard from '../../components/BenefitCard/BenefitCard.jsx';

/*
=================================================
PAGINA: Home
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Explicar a finalidade do PetNear e apresentar caminhos para o fluxo.

O QUE JA ESTA PRONTO:
Banner, cards de servicos, beneficios e links iniciais.

O QUE FALTA:
Refinar textos, imagens, espacamentos e responsividade.

CONCEITOS:
Link, componentes reutilizaveis, props e CSS.
=================================================
*/

/*
=================================================
GUIA PETNEAR - HOME

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
A pagina inicial precisa comunicar a finalidade do produto e
dar caminhos claros para iniciar o fluxo.

ANTES DE COMEÇAR:
Observe quais partes da Home ja existem: Banner, servicos,
beneficios e botoes de navegacao.

COMECE POR:
Leia os textos atuais e verifique se uma pessoa entenderia que
o PetNear ajuda tutores a encontrar Pet Shops e agendar servicos.

DEPOIS:
Confira se os botoes levam para o fluxo correto. A navegacao
precisa funcionar sem o usuario digitar enderecos manualmente.

QUANDO ISSO FUNCIONAR:
Revise os cards visuais e veja se eles usam bem componentes
reutilizaveis.

CONCEITOS PARA ESTUDAR:
- componentes
- props
- Link
- CSS

COMO TESTAR:
Abra a Home, leia como usuario final e clique nos caminhos
principais.

NAO ESCREVA A SOLUCAO.
=================================================
*/

const servicos = [
  { titulo: 'Banho', descricao: 'Servico previsto para ser escolhido no agendamento.' },
  { titulo: 'Tosa', descricao: 'Opcao visual para compor o catalogo de servicos.' },
  { titulo: 'Higiene', descricao: 'Item inicial para demonstrar cards reutilizaveis.' },
  { titulo: 'Corte de unhas', descricao: 'Servico extra para a equipe ajustar depois.' },
];

const beneficios = [
  { titulo: 'Praticidade', texto: 'Fluxo pensado para tutores organizarem cuidados.' },
  { titulo: 'Localizacao', texto: 'Mapa simulado na AV1 e integracao futura na AV2.' },
  { titulo: 'Organizacao', texto: 'Dados de pet, localizacao e horario em um fluxo.' },
  { titulo: 'Facilidade', texto: 'Base preparada para agendamento guiado.' },
];

function Home() {
  return (
    <>
      <Banner />

      <section className="page">
        <header className="page-header">
          <h1 className="page-title">Como o PetNear ajuda</h1>
          <p className="page-description">
            O PetNear sera uma aplicacao para tutores encontrarem Pet Shops
            proximos e organizarem servicos para seus animais.
          </p>
        </header>

        <div className="grid">
          {servicos.map((servico) => (
            <ServiceCard key={servico.titulo} titulo={servico.titulo} descricao={servico.descricao} />
          ))}
        </div>

        <section className="section-band">
          <div className="grid">
            {beneficios.map((beneficio) => (
              <BenefitCard key={beneficio.titulo} titulo={beneficio.titulo} texto={beneficio.texto} />
            ))}
          </div>
        </section>

        {/* =================================================
        TODO AV1
        NIVEL: LEVE
        RESPONSAVEL SUGERIDO: PESSOA 3

        OBJETIVO:
        Melhorar a Home como apresentacao do produto, sem finalizar o sistema.

        O QUE VOCE DEVE FAZER:
        1. Revisar textos do banner.
        2. Escolher onde inserir imagens.
        3. Usar Link para navegar sem recarregar a pagina.
        4. Criar cards apenas quando eles ajudarem a reutilizar codigo.

        CONCEITOS:
        Link
        NavLink
        componentes reutilizaveis
        props
        CSS

        COMO TESTAR:
        Clique em "Encontrar um Pet Shop" e "Agendar agora".

        RESULTADO ESPERADO:
        O usuario deve conseguir iniciar o fluxo sem digitar URL.

        NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
        ================================================= */}
      </section>
    </>
  );
}

export default Home;

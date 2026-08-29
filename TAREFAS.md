# Divisao de tarefas - PetNear

Esta divisao busca equilibrar dificuldade e volume de trabalho. Nao criem commits artificiais: cada commit deve representar uma alteracao real.

## Pessoa 1 - DIFICIL

Responsabilidade principal: mapa, filtro e selecao de Pet Shop.

Tarefas:

- Pagina Mapa.
- `petshops.json`.
- Listagem de Pet Shops.
- Uso de `map()`.
- Uso de `key` estavel.
- Componente `PetShopCard`.
- Filtro por servico.
- Uso de `filter()`.
- Uso de `includes()`.
- Selecao do Pet Shop.
- Uso de `find()`.
- Uso de `useNavigate`.
- Mensagem de lista vazia.
- Preparacao futura para mapa real.
- Apoio na logica do agendamento.

Conceitos:

- `useState`
- `map`
- `filter`
- `find`
- `props`
- eventos
- React Router
- renderizacao condicional

Sugestoes de commits reais:

- `feat: adiciona estrutura da pagina de mapa`
- `feat: adiciona dados locais de pet shops`
- `feat: cria componente PetShopCard`
- `feat: implementa filtro por servico`
- `feat: adiciona selecao do pet shop`

## Pessoa 2 - MEDIO

Responsabilidade principal: cadastros e persistencia.

Tarefas:

- Pagina Cadastros.
- Cadastro do tutor.
- Cadastro do pet.
- Localizacao.
- Formulario controlado.
- `onChange`.
- `onSubmit`.
- Validacao.
- Mensagens.
- `localStorage`.
- `JSON.stringify`.
- `JSON.parse`.
- Fluxo entre etapas.

Conceitos:

- `useState`
- eventos
- formularios
- validacao
- persistencia
- renderizacao condicional

Sugestoes de commits reais:

- `feat: cria cadastro do tutor`
- `feat: cria cadastro do pet`
- `feat: adiciona etapa de localizacao`
- `feat: adiciona validacoes dos formularios`
- `feat: adiciona persistencia local do pet`

## Pessoa 3 - LEVE + agendamento visual

Responsabilidade principal: interface, navegacao e documentacao.

Tarefas:

- Home.
- Header.
- Navbar.
- Footer.
- Banner.
- Cards de servicos.
- Cards de beneficios.
- NotFound.
- CSS.
- Responsividade basica.
- README.
- Estrutura visual da pagina Agendamento.
- Cards de servico.
- Botoes de horario.
- Tela de confirmacao.

Conceitos:

- React Router
- `NavLink`
- componentes
- props simples
- CSS
- estrutura visual

Sugestoes de commits reais:

- `feat: cria pagina inicial do PetNear`
- `feat: adiciona navegacao principal`
- `feat: cria estrutura visual do agendamento`
- `style: adiciona responsividade basica`
- `docs: adiciona documentacao do projeto`

## Agendamento compartilhado

Pessoa 3 fica com a estrutura visual.

Pessoa 1 ou Pessoa 2 fica com estado, validacao, confirmacao e persistencia.

## Classificacao dos niveis

LEVE:

- Home
- Header
- Navbar
- Footer
- Banner
- CSS inicial
- NotFound

MEDIO:

- Cadastro
- Formularios
- Validacoes
- localStorage
- PetShopCard
- props
- mensagens condicionais

DIFICIL:

- Mapa
- Filtro
- Selecao de Pet Shop
- Fluxo entre paginas
- useNavigate
- find
- agendamento
- estado compartilhado
- persistencia integrada

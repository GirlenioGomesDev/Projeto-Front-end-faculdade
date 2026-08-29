# Divisao de tarefas - PetNear

<!--
GUIA PETNEAR - ORDEM GERAL DE TRABALHO

Nao tente fazer o projeto inteiro de uma vez.

Metodologia para todos:
1. leia a orientacao;
2. abra o arquivo relacionado;
3. entenda o que ja existe;
4. execute o projeto;
5. escolha uma tarefa pequena;
6. desenvolva manualmente;
7. teste;
8. corrija;
9. teste novamente;
10. registre a contribuicao quando estiver funcionando.

Divisao oficial da equipe:
- Leno: nivel dificil.
- Anita: nivel medio.
- Bianka: nivel leve.
-->

Esta divisao busca equilibrar dificuldade e volume de trabalho. Nao criem commits artificiais: cada commit deve representar uma alteracao real.

## Pessoa 1 - DIFICIL

<!--
GUIA PETNEAR - LENO / NIVEL DIFICIL

Primeira tarefa recomendada:
abrir os dados locais dos Pet Shops e entender propriedades,
servicos e identificadores.

Ordem sugerida:
1. dados dos Pet Shops;
2. listagem;
3. PetShopCard;
4. teste da listagem;
5. filtro por servico;
6. mensagem de lista vazia;
7. selecao do Pet Shop;
8. navegacao para Agendamento;
9. integracao com o fluxo;
10. logica do Agendamento;
11. testes.

Requisito da AV1 para atacar primeiro:
listagem de dados do dominio a partir de JSON local.

Nao implemente API real, mapa real ou autenticacao.
-->

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

<!--
GUIA PETNEAR - ANITA / NIVEL MEDIO

Primeira tarefa recomendada:
entender o cadastro do tutor e controlar apenas um campo antes
de pensar no formulario inteiro.

Ordem sugerida:
1. cadastro do tutor;
2. controle dos campos;
3. envio do formulario;
4. validacao;
5. cadastro do pet;
6. validacao do pet;
7. localizacao manual;
8. fluxo entre etapas;
9. testes;
10. persistencia;
11. teste apos atualizar a pagina.

Requisito da AV1 para atacar primeiro:
formulario controlado com validacao de obrigatorios.

Nao comece por localStorage. Primeiro garanta que os dados estao
corretos na tela.
-->

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

<!--
GUIA PETNEAR - BIANKA / NIVEL LEVE

Primeira tarefa recomendada:
revisar a Home e confirmar se ela explica claramente a finalidade
do PetNear.

Ordem sugerida:
1. Home;
2. Header e Navbar;
3. navegacao;
4. Banner;
5. servicos;
6. beneficios;
7. componentes visuais;
8. CSS;
9. Agendamento visual;
10. responsividade;
11. NotFound;
12. README.

Requisito da AV1 para atacar primeiro:
pagina inicial que comunique a finalidade do produto.

Bianka pode organizar a parte visual do Agendamento, mas a logica
complexa fica com Leno, com apoio de Anita nas validacoes.
-->

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

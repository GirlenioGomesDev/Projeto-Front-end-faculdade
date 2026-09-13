# PetNear

<!--
GUIA PETNEAR - README DA AV1

RESPONSAVEL: BIANKA
NIVEL: LEVE

Este README deve ser atualizado pela equipe somente depois que
as funcionalidades forem realmente desenvolvidas e testadas.

Antes de documentar uma funcionalidade, confirme:
1. ela existe na interface;
2. ela foi testada no navegador;
3. o integrante responsavel consegue explicar como funciona;
4. ela ajuda a cumprir algum requisito da AV1.

Nao descreva como pronto algo que ainda esta apenas planejado.
-->

Projeto academico de Front-end Frameworks criado como esqueleto inicial para a AV1.

## Problema e publico

O PetNear auxilia tutores de animais a localizar Pet Shops proximos e organizar servicos para seus pets, como banho, tosa, higiene e corte de unhas.

## Integrantes

<!--
GUIA PETNEAR - INTEGRANTES

Preencha esta parte com os nomes reais da equipe e a contribuicao
final de cada pessoa.

Divisao oficial para orientar o trabalho:
- Leno: nivel dificil.
- Anita: nivel medio.
- Bianka: nivel leve.

Nao invente contribuicoes. Registre apenas o que cada integrante
realmente implementou, testou ou documentou.
-->

- Integrante Girlenio Gomes da Silva - Filtro e seleção de pet shop, lógica e validações do agendamento, testes e integração das branches.
- Integrante Anita Gallindo - Formulários de localização e tutor, controle dos campos e validações.
- Integrante Bianka Moura - Visual da Home, banner, cards, ícones e estilos.

## Funcionalidades

<!--
GUIA PETNEAR - FUNCIONALIDADES

Quando uma funcionalidade sair do planejamento e passar a
funcionar, volte aqui e confira se a descricao continua correta.

Use este bloco como apoio para explicar ao professor quais
requisitos da AV1 foram trabalhados, mas nao marque nada como
concluido sem testar.
-->

- Apresentacao da finalidade do produto.
- Formulário do tutor com validação de nome, e-mail e cidade, sem persistência e sem autenticação.
- Cadastro do pet.
- Localizacao manual.
- Mapa simulado com Pet Shops ficticios.
- Filtro de Pet Shops por servico.
- Escolha de Pet Shop.
- Agendamento de servico.
- Mensagens condicionais.
- Persistência do pet, pet shop selecionado e último agendamento no `localStorage`.
- Bloqueio de agendamento sem pet cadastrado.
- Exibição somente dos serviços oferecidos pelo pet shop selecionado.


## Rotas

- `/` - Home
- `/cadastros` - Cadastro do tutor, pet e localizacao
- `/mapa` - Mapa simulado e Pet Shops proximos
- `/agendamento` - Formulario de agendamento
- `*` - Pagina nao encontrada

## Tecnologias

- React
- JavaScript
- Vite
- React Router
- CSS tradicional

## Como executar

Instale as dependencias:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra o endereco informado pelo Vite no navegador.

## Dados locais

- `src/data/petshops.json`
- `src/data/servicos.json`
- `src/data/horarios.json`

Na AV1, nao usar API real, back-end, Google Maps, Leaflet, Firebase, Supabase ou API de CEP.

## Persistencia

<!--
GUIA PETNEAR - PERSISTENCIA

RESPONSAVEL: ANITA
NIVEL: MEDIO

Nao comece a AV1 por esta parte.

Primeiro faca o formulario funcionar, depois valide os campos e
somente entao pense em guardar um dado relevante no navegador.

Teste atualizando a pagina para verificar se o dado continua
disponivel.
-->

O projeto usa localStorage para salvar no navegador os dados do pet, o pet shop escolhido e o último agendamento.

Esses dados permanecem salvos ao atualizar a página. Um novo agendamento substitui o anterior.

A página recupera o pet e o pet shop salvos, mas a mensagem de confirmação do agendamento desaparece ao atualizar.

## Divisao da equipe

Consulte `TAREFAS.md` para a divisao entre Pessoa 1, Pessoa 2 e Pessoa 3.

## Limitacoes

- Nao existe API real.
- Nao existe autenticacao real.
- Nao existe mapa real.
- Os dados do tutor não são salvos.
- Apenas o último agendamento é armazenado, sem histórico.
- Os agendamentos são simulados e não são enviados aos pet shops.
- Os dados locais dependem do navegador e podem ser perdidos se o armazenamento for limpo.


## Uso de Inteligencia Artificial

<!--
GUIA PETNEAR - USO DE IA

Registre o uso de IA com transparencia.

A IA pode apoiar com orientacoes, explicacoes, revisao e
organizacao, mas a equipe precisa desenvolver, testar e entender
as funcionalidades que serao avaliadas.
-->

Foi utilizada inteligência artificial como apoio na criação do esqueleto inicial do projeto e dos comentários didáticos. Durante o desenvolvimento, também ajudou com explicações de conceitos, revisão de código e orientações para testes e comandos Git. A equipe implementou as funcionalidades e realizou os testes no navegador, incluindo cadastro do pet, filtros, validações do agendamento e persistência local.

## Evolucao planejada para AV2

Na AV2, o projeto podera evoluir para:

- API de CEP;
- mapa/localizacao;
- dados remotos;
- login real;
- autenticacao;
- sessao;
- logout;
- rota protegida;
- `fetch`;
- loading;
- erro;
- retry.

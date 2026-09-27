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

Projeto acadêmico de Front-end Frameworks desenvolvido para a AV1, com o objetivo de facilitar a localização de serviços para cuidados de pets.

## Problema e publico

O PetNear auxilia tutores de animais a localizar Pet Shops próximos e organizar serviços para seus pets, como banho, tosa, higiene e corte de unhas.

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

- Bianka - Home, Header, Navbar, Footer, Banner, ServiceCard, BenefitCard, NotFound, responsividade, visual do Agendamento e documentação.
- Anita - Cadastros, validação dos formulários e persistência com localStorage.
- Leno - Mapa, dados dos Pet Shops, listagem e filtros.

## Funcionalidades

<!--
GUIA PETNEAR - FUNCIONALIDADES

Quando uma funcionalidade sair do planejamento e passar a
funcionar, volte aqui e confira se a descricao continua correta.

Use este bloco como apoio para explicar ao professor quais
requisitos da AV1 foram trabalhados, mas nao marque nada como
concluido sem testar.
-->

- Apresentação da finalidade do produto.
- Cadastro inicial do tutor.
- Cadastro do pet.
- Localização manual.
- Mapa simulado com Pet Shops ficticios.
- Filtro de Pet Shops por serviço.
- Escolha de Pet Shop.
- Agendamento de servico.
- Mensagens condicionais.
- Persistência local futura com `localStorage`.


## Rotas

- `/` - Home
- `/cadastros` - Cadastro do tutor, pet e localização
- `/mapa` - Mapa simulado e Pet Shops próximos
- `/agendamento` - Formulário de agendamento
- `*` - Página não encontrada

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

A persistencia principal sugerida para a AV1 e o pet cadastrado, usando `localStorage`.

Conceitos que a equipe devera estudar:

- `localStorage.setItem()`
- `localStorage.getItem()`
- `JSON.stringify()`
- `JSON.parse()`

## Divisao da equipe

Consulte `TAREFAS.md` para a divisao entre Pessoa 1, Pessoa 2 e Pessoa 3.

## Limitações

- Não existe API real.
- Não existe autenticação real.
- Não existe mapa real.
- O agendamento possui a estrutura visual da pagina, enquanto as funcionalidades de cadastro e persistencia sao desenvolvidas pela equipe.
- Os formularios ainda nao estao controlados.
- As mensagens condicionais ainda precisam ser implementadas.

## Uso de Inteligencia Artificial

<!--
GUIA PETNEAR - USO DE IA

Registre o uso de IA com transparencia.

A IA pode apoiar com orientacoes, explicacoes, revisao e
organizacao, mas a equipe precisa desenvolver, testar e entender
as funcionalidades que serao avaliadas.
-->

Foi utilizada inteligencia artificial como apoio para criacao do esqueleto inicial, organizacao da arquitetura e comentarios didaticos. As funcionalidades avaliativas serao implementadas, testadas, revisadas e compreendidas pela equipe.

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

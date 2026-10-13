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

- Integrante Girlenio Gomes da Silva - Mapa, dados dos Pet Shops, listagem, filtros, escolha de pet shop, validações do agendamento, testes e integração das branches.
- Integrante Anita Gallindo - Cadastros, formulários de localização e tutor, controle dos campos, validações e persistência com localStorage.
- Integrante Bianka Moura - Home, Header, Navbar, Footer, Banner, ServiceCard, BenefitCard, NotFound, responsividade, visual do Agendamento e documentação.

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
- Cadastro inicial do tutor com validação de nome, e-mail e cidade, sem persistência e sem autenticação.
- Cadastro do pet.
- Localização manual.
- Mapa simulado com Pet Shops ficticios.
- Filtro de Pet Shops por serviço.
- Escolha de Pet Shop.
- Agendamento de servico.
- Mensagens condicionais.
- Persistência do pet, pet shop selecionado e último agendamento no `localStorage`.
- Bloqueio de agendamento sem pet cadastrado.
- Exibição somente dos serviços oferecidos pelo pet shop selecionado.


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

O projeto usa localStorage para salvar no navegador os dados do pet, o pet shop escolhido e o último agendamento.

Esses dados permanecem salvos ao atualizar a página. Um novo agendamento substitui o anterior.

A página recupera o pet e o pet shop salvos, mas a mensagem de confirmação do agendamento desaparece ao atualizar.

## Divisao da equipe

Consulte `TAREFAS.md` para a divisao entre Pessoa 1, Pessoa 2 e Pessoa 3.

## Limitações

- Não existe API real.
- Não existe autenticação real.
- Não existe mapa real.
- Os dados do tutor não são salvos no `localStorage`.
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

## Guia de desenvolvimento AV2

<!--
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: README.md

RESPONSAVEIS:
LENO - DIFICIL
ANITA - MEDIO
BIANKA - FACIL

REQUISITO DA AV2:
Atualizar a documentacao conforme as secoes 7.2, 7.5, 8, 9 e 10
do PDF: contrato da API, evolucao da AV1 para AV2, limitacoes,
autenticacao, rotas protegidas, sessao, fetch em services, estados
de loading/sucesso/vazio/erro, retry e contingencia.

OBJETIVO:
Registrar o que a equipe deve documentar depois de implementar e
testar as funcionalidades.

O QUE JA ESTA PRONTO:
O README descreve o projeto da AV1, rotas, tecnologias, dados
locais, persistencia e limitacoes atuais.

O QUE FALTA FAZER:
1. Informar a API aprovada pelo professor.
2. Descrever URL-base e endpoints realmente usados.
3. Explicar como autenticar, encerrar sessao e proteger rotas.
4. Registrar quais dados locais continuam como contingencia.
5. Atualizar limitacoes sem marcar como pronto algo nao testado.

ONDE MODIFICAR:
Nas secoes abaixo, depois que a equipe implementar e testar cada
parte da AV2.

ANTES DE COMECAR:
Tenha evidencias no codigo e testes no navegador. Comentario nao
conta como funcionalidade concluida.

DICA:
Documente contrato de API com metodo, endpoint, corpo enviado,
resposta esperada e erros conhecidos.

COMO TESTAR:
1. Execute npm run dev.
2. Teste fluxo feliz.
3. Teste erro de API.
4. Atualize a pagina para conferir sessao.

CUIDADOS:
Nao documente endpoint, token ou credencial que nao exista.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
-->

### Fonte verificada para AV2

Documento consultado: `C:\Users\Leno\Desktop\Projeto-Evolutivo-AV1-AV2.pdf`.

Pontos principais confirmados no PDF:

- A AV2 conserva tema, repositorio e base funcional da AV1.
- A equipe precisa escolher exatamente uma opcao de integracao: API pronta aprovada ou API do projeto de Back-end.
- A autenticacao e obrigatoria, com login, feedback, sessao, rota protegida, restauracao apos refresh e logout.
- O `fetch` deve ficar concentrado em `src/services`.
- Devem existir estados visiveis de carregamento, sucesso, vazio e erro.
- Deve haver tentativa novamente apos falha recuperavel.
- Dados locais de contingencia sao obrigatorios, mas nao substituem a integracao.
- O README da AV2 precisa ter contrato da API, evolucao da AV1 para AV2, limitacoes e contingencia.

APIs aprovadas pelo PDF: DummyJSON, BrasilAPI, PokeAPI v2, Open Library, TVmaze e Open-Meteo. Outra API so deve ser usada se for aprovada no checkpoint.

### Situacao atual para AV2

| Item | Situacao | Evidencia |
| --- | --- | --- |
| Dados locais de Pet Shops | Parcialmente concluido | `src/data/petshops.json` e `src/pages/Mapa/Mapa.jsx` |
| Filtro e busca no mapa | Parcialmente concluido | `Mapa.jsx` usa `filter()` e `includes()` |
| Cadastro do pet | Parcialmente concluido | `PetForm.jsx` controla campos e salva em `localStorage` |
| Agendamento local | Parcialmente concluido | `ScheduleForm.jsx` valida e salva ultimo agendamento |
| PDF de requisitos | Concluido | `Projeto-Evolutivo-AV1-AV2.pdf` consultado |
| Opcao de integracao A ou B | Pendente | PDF exige escolher exatamente uma opcao na secao 7.3 |
| API escolhida pela equipe | Pendente | A lista aprovada existe, mas a equipe ainda precisa registrar a escolhida |
| Fetch em services | Pendente | pasta `src/services` ainda possui apenas README |
| Autenticacao real | Pendente | nao existe login real, token ou sessao de usuario |
| Rota protegida | Pendente | rotas atuais estao abertas em `App.jsx` |
| HTTP 401/403 | Pendente | ainda nao existe camada HTTP |
| `.env.example` | Pendente | criar somente apos confirmar nome da variavel e URL-base |

### Contrato da API para preencher na AV2

Preencher somente depois que o professor aprovar a API.

| Recurso | Metodo | Endpoint | Envio | Resposta esperada | Erros previstos |
| --- | --- | --- | --- | --- | --- |
| Autenticacao | A definir | A definir | A definir | A definir | 401, 403 |
| Pet Shops | A definir | A definir | A definir | A definir | vazio, erro de rede |
| Agendamento | A definir | A definir | A definir | A definir | 401, 403, validacao |
| Localizacao/CEP | A definir | A definir | A definir | A definir | CEP invalido, erro de rede |

### Limitacoes atuais antes da AV2

- O projeto ainda nao consome API real.
- A pasta `services` ainda nao possui implementacao de `fetch`.
- A senha digitada no cadastro nao deve ser persistida.
- A sessao real ainda nao existe.
- A rota `/agendamento` ainda nao esta protegida.
- Os dados locais continuam sendo a base do mapa e do agendamento.
- A API final da equipe ainda nao foi registrada neste README.

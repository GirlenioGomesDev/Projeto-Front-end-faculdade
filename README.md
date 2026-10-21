
# PetNear 🐾

Projeto acadêmico desenvolvido na disciplina de Front-end Frameworks, utilizando React, JavaScript e Vite.

O PetNear tem como objetivo facilitar a busca por estabelecimentos que oferecem produtos e serviços para animais de estimação, permitindo cadastrar informações do tutor e do pet, consultar Pet Shops e realizar agendamentos demonstrativos.

## Integrantes

- **Girlenio Gomes da Silva (Leno):** mapa, integração com APIs, autenticação, proteção de rotas, listagem e filtros de Pet Shops, integração com agendamento e testes.
- **Anita Gallindo:** formulários de cadastro do tutor, pet e localização, validações e persistência local.
- **Bianka Moura:** Home, Header, Navbar, Footer, Banner, componentes visuais, responsividade e documentação.

## Tecnologias utilizadas

- React
- JavaScript
- HTML e CSS
- Vite
- React Router
- Lucide React
- Leaflet
- OpenStreetMap
- API Overpass
- API DummyJSON
- Fetch API
- localStorage
- Git e GitHub

## Funcionalidades da AV1

Na primeira avaliação, o PetNear foi desenvolvido utilizando dados locais e componentes React.

Foram implementadas:

- Página inicial de apresentação.
- Cadastro do tutor.
- Cadastro do pet.
- Formulário de localização.
- Listagem demonstrativa de Pet Shops.
- Pesquisa de estabelecimentos por nome.
- Filtro por tipo de serviço.
- Seleção de Pet Shop.
- Formulário demonstrativo de agendamento.
- Validação de campos.
- Mensagens condicionais.
- Persistência de informações selecionadas no localStorage.
- Navegação entre páginas com React Router.

A AV1 foi preservada como base para a evolução do projeto.

## Evolução implementada na AV2

Na segunda avaliação, o PetNear passou a utilizar APIs externas e recursos de autenticação.

### 1. Autenticação com DummyJSON

Foi implementado um serviço de autenticação utilizando a API DummyJSON.

O sistema permite:

- Realizar login com credenciais demonstrativas.
- Verificar a resposta da API.
- Armazenar a sessão no navegador.
- Recuperar a sessão após atualizar a página.
- Validar o token de autenticação.
- Realizar logout.
- Redirecionar usuários sem autenticação para a página de login.
- Tratar erros HTTP 401 e 403.

A rota `/agendamento` é protegida pelo componente `ProtectedRoute`.

### 2. Integração com a API Overpass

Foi utilizada a API Overpass para consultar estabelecimentos cadastrados no OpenStreetMap.

A aplicação consulta estabelecimentos identificados como lojas de animais (`shop=pet`), utilizando uma região demonstrativa centrada em Recife, Pernambuco.

Os dados recebidos são normalizados no arquivo `petshopService.js` antes de serem utilizados pelos componentes React.

As informações disponíveis podem incluir:

- Nome do estabelecimento.
- Endereço.
- Bairro e cidade.
- Latitude e longitude.
- Horário de funcionamento, quando informado.

Nem todos os registros possuem informações completas.

O sistema não inventa avaliações, distâncias ou serviços que não estejam disponíveis nos dados consultados.

### 3. Mapa interativo com Leaflet

O mapa demonstrativo da AV1 foi substituído por um mapa interativo utilizando Leaflet e OpenStreetMap.

O mapa oferece:

- Visualização de ruas e bairros reais.
- Controles de zoom.
- Movimentação pelo mapa.
- Marcadores dos estabelecimentos encontrados.
- Identificação dos Pet Shops por meio de popups.
- Botão para iniciar o agendamento a partir do marcador.
- Integração com a seleção de estabelecimentos.

A região inicial do mapa é Recife. O sistema não utiliza automaticamente a localização atual do usuário.

### 4. Agendamento e proteção de acesso

O usuário pode selecionar um Pet Shop pela listagem ou pelo mapa.

A seleção é armazenada no localStorage e utilizada pela página de agendamento.

Quando o usuário não possui uma sessão autenticada, o sistema solicita login.

Após a autenticação, o usuário retorna ao agendamento, preservando o estabelecimento escolhido.

**Importante:** o agendamento é demonstrativo. O sistema não realiza reservas reais nos estabelecimentos encontrados no OpenStreetMap.

### 5. Tratamento de estados da interface

Foram implementados estados para melhorar a experiência do usuário durante as consultas externas:

- **Loading:** mensagem enquanto a consulta está sendo realizada.
- **Sucesso:** apresentação dos dados recebidos.
- **Vazio:** mensagem quando a pesquisa não encontra resultados.
- **Erro:** aviso quando ocorre falha na requisição.
- **Retry:** botão para realizar uma nova tentativa.
- **Fallback:** utilização de estabelecimentos locais quando a API externa falha.

## APIs utilizadas

### DummyJSON

URL-base:

https://dummyjson.com

| Método | Endpoint | Finalidade |
|---|---|---|
| POST | `/auth/login` | Autenticar usuário |
| GET | `/auth/me` | Consultar e validar usuário autenticado |

O login envia usuário e senha em formato JSON.

As requisições autenticadas utilizam o token recebido da API.

Possíveis falhas incluem credenciais inválidas, erros HTTP 401/403 e problemas de conexão.

### Overpass API

Endpoint:

https://overpass-api.de/api/interpreter

Método utilizado: POST.

A consulta utiliza a linguagem Overpass QL para localizar estabelecimentos identificados como `shop=pet`.

A resposta é recebida em JSON, e os registros são adaptados ao formato utilizado pelo PetNear.

A disponibilidade dos resultados depende dos dados cadastrados no OpenStreetMap e do funcionamento do serviço Overpass.

### OpenStreetMap

Site:

https://www.openstreetmap.org

Utilizado como fonte de dados geográficos e para a visualização do mapa interativo.

## Credenciais de demonstração

Para testar a autenticação:

**Usuário:** `emilys`

**Senha:** `emilyspass`

Essas credenciais são disponibilizadas publicamente pelo serviço demonstrativo DummyJSON.

O cadastro local do PetNear não cria uma conta de autenticação no DummyJSON.

## Rotas da aplicação

| Rota | Funcionalidade |
|---|---|
| `/` | Página inicial |
| `/cadastros` | Cadastro do tutor, pet e localização |
| `/mapa` | Mapa interativo e listagem de Pet Shops |
| `/login` | Autenticação |
| `/agendamento` | Agendamento demonstrativo protegido |
| `*` | Página não encontrada |

## Estrutura principal

```text
src/
├── components/
│   ├── AuthLogin/
│   ├── Header/
│   ├── MapaReal/
│   ├── Navbar/
│   ├── PetShopCard/
│   ├── ProtectedRoute/
│   └── ...
├── data/
│   ├── petshops.json
│   ├── servicos.json
│   └── horarios.json
├── pages/
│   ├── Home/
│   ├── Cadastros/
│   ├── Mapa/
│   ├── Agendamento/
│   └── NotFound/
├── services/
│   ├── apiClient.js
│   ├── apiConfig.js
│   ├── authService.js
│   ├── petshopService.js
│   └── sessionService.js
├── App.jsx
└── main.jsx
```

## Como executar o projeto

### Requisitos

- Node.js e npm instalados.
- Conexão com a internet para consultar as APIs e carregar o mapa.

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar o ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_API_BASE_URL=https://dummyjson.com
```

O arquivo `.env.example` apresenta essa configuração como referência.

### 3. Executar o projeto

```bash
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

### 4. Gerar a versão de produção

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist`.

## Persistência de dados

O projeto utiliza localStorage para manter informações necessárias ao fluxo demonstrativo, incluindo dados do pet, Pet Shop selecionado, sessão e último agendamento.

O armazenamento local permite recuperar informações após atualizar a página.

Os dados permanecem vinculados ao navegador utilizado e podem ser removidos pelo usuário.

Não existe um banco de dados próprio para registrar contas de tutores ou agendamentos.

## Contingência local

A API Overpass é um serviço externo e pode apresentar falhas de conexão, indisponibilidade ou respostas incompletas.

Para evitar que a listagem fique inutilizável durante essas situações, o PetNear mantém o arquivo:

`src/data/petshops.json`

Quando a consulta remota falha, o sistema apresenta os estabelecimentos demonstrativos e informa ao usuário que está utilizando dados locais.

O mapa permanece disponível, mas os estabelecimentos fictícios sem coordenadas não recebem marcadores geográficos.

Essa contingência não substitui a integração com a API.

## Testes realizados

Durante o desenvolvimento da AV2, foram realizados testes de:

- Autenticação com credenciais demonstrativas.
- Acesso à rota protegida sem login.
- Recuperação da sessão após atualizar a página.
- Logout e bloqueio de novo acesso sem autenticação.
- Consulta de Pet Shops pela API Overpass.
- Exibição de estabelecimentos reais na listagem.
- Visualização do mapa interativo.
- Abertura dos popups dos marcadores.
- Seleção de Pet Shop pelo mapa.
- Navegação para o agendamento.
- Preservação do estabelecimento selecionado.
- Pesquisa sem resultados.
- Falha simulada da API.
- Utilização da contingência local.
- Compilação de produção com Vite.
- Verificação de dependências utilizando npm audit.

O botão de nova tentativa foi implementado. Sua recuperação após uma falha simulada ainda deve ser confirmada em teste específico.

## Limitações

- A autenticação utiliza contas demonstrativas da API DummyJSON.
- O cadastro do PetNear não cria contas de autenticação reais.
- Não existe back-end próprio nem banco de dados.
- O agendamento não é enviado aos estabelecimentos.
- As informações dos Pet Shops dependem do cadastro existente no OpenStreetMap.
- Alguns estabelecimentos não possuem horários, endereços ou serviços informados.
- As avaliações e distâncias não são calculadas para os registros externos.
- O mapa utiliza uma região demonstrativa de Recife.
- A disponibilidade das APIs depende de serviços externos.
- O localStorage não substitui um sistema de autenticação e armazenamento seguro para produção.

## Uso de Inteligência Artificial

Durante o desenvolvimento, foi utilizada inteligência artificial como ferramenta de apoio para explicações de conceitos, revisão de código, identificação de erros, organização das tarefas e orientação sobre testes.

A implementação das funcionalidades foi acompanhada de testes no ambiente local, utilizando React, Vite, APIs externas e ferramentas de desenvolvimento.

## Controle de versão

O projeto utiliza Git e GitHub para versionamento e colaboração.

As funcionalidades da AV2 foram desenvolvidas em uma branch específica, permitindo revisão por meio de Pull Request antes da integração à branch principal.

O arquivo `.env` é ignorado pelo Git, enquanto `.env.example` documenta a configuração necessária para executar o projeto.

---

**PetNear — conectando você aos cuidados que seu pet precisa. 🐾**

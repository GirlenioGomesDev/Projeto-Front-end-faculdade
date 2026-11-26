
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

| Aspecto | Situação na AV1 | Evolução na AV2 | Evidência no código |
|---|---|---|---|
| Dados | Pet Shops demonstrativos em JSON local | Consulta à Overpass e normalização dos estabelecimentos; JSON mantido como contingência | `src/services/petshopService.js`, `src/data/petshops.json` |
| Autenticação | Sem login obrigatório | Login com DummyJSON, sessão persistida, validação do token e logout | `src/components/AuthLogin/AuthLogin.jsx`, `src/services/authService.js`, `src/services/sessionService.js`, `src/components/Header/Header.jsx` |
| Acesso | Agendamento sem autenticação | Rota `/agendamento` protegida, com retorno após login e tratamento de 401/403 | `src/App.jsx`, `src/components/ProtectedRoute/ProtectedRoute.jsx` |
| Estados da interface | Lista, filtros e mensagens locais | Carregamento, sucesso, vazio, erro, nova tentativa e indicação de dados demonstrativos | `src/pages/Mapa/Mapa.jsx`, `src/styles/feedback.css` |
| Mapa | Representação demonstrativa | Mapa interativo com ruas, marcadores e seleção de estabelecimentos | `src/components/MapaReal/MapaReal.jsx` |
| Organização | Páginas, componentes, dados e estilos | Requisições com `fetch` concentradas em services e URLs centralizadas | `src/services/apiClient.js`, `src/services/apiConfig.js`, `.env.example` |

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

O filtro de serviços utiliza somente os serviços presentes na lista carregada. A normalização atual da Overpass não informa serviços, então o filtro fica desabilitado e a interface orienta a busca pelo nome. Nos dados locais de contingência, o filtro continua disponível, incluindo a opção de corte de unhas. Ao recuperar a consulta online, a seleção anterior de serviço é limpa para não esconder os resultados remotos.

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

## Contrato das APIs — Opção A

A integração utiliza uma API pronta para os dados do tema e o DummyJSON para login e sessão. Tutor, pet, localização e agendamento demonstrativo permanecem locais, conforme as limitações descritas neste documento.

O uso da Overpass depende da aprovação do professor no checkpoint, pois ela não está na lista original de APIs do roteiro. Este documento descreve a implementação e não comprova essa aprovação.

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

Corpo enviado para `POST /auth/login`, com `Content-Type: application/json`:

```json
{
  "username": "emilys",
  "password": "emilyspass"
}
```

Exemplo ilustrativo de resposta, reduzido aos campos utilizados pela aplicação:

```json
{
  "id": 1,
  "username": "emilys",
  "firstName": "Emily",
  "accessToken": "<token retornado pela API>"
}
```

`GET /auth/me` não envia corpo e utiliza o cabeçalho `Authorization: Bearer <accessToken>`. A resposta JSON deve representar o usuário autenticado. Respostas 401/403 removem a sessão e redirecionam para o login; uma falha de rede apresenta mensagem e permite tentar novamente. A senha não é persistida.

### Overpass API

Endpoint:

https://overpass-api.de/api/interpreter

Método utilizado: POST.

A consulta utiliza a linguagem Overpass QL para localizar estabelecimentos identificados como `shop=pet`.

A resposta é recebida em JSON, e os registros são adaptados ao formato utilizado pelo PetNear.

A disponibilidade dos resultados depende dos dados cadastrados no OpenStreetMap e do funcionamento do serviço Overpass.

O corpo é enviado como `application/x-www-form-urlencoded`, utilizando `URLSearchParams` com o campo `data` contendo a consulta:

```text
[out:json][timeout:25];
(
  nwr["shop"="pet"](around:10000,-8.0476,-34.8770);
);
out center;
```

Exemplo ilustrativo do formato esperado, sem representar uma consulta real:

```json
{
  "elements": [
    {
      "type": "node",
      "id": 123,
      "lat": -8.0476,
      "lon": -34.8770,
      "tags": {
        "name": "Pet Shop de exemplo",
        "addr:city": "Recife"
      }
    }
  ]
}
```

O service exige um array `elements`, descarta estabelecimentos sem nome e normaliza identificador, endereço e coordenadas. Registros `way` e `relation` podem fornecer coordenadas em `center`. Campos ausentes recebem textos explicativos; serviços permanecem em `servicos: []`.

Um array vazio apresenta a mensagem de lista vazia. Falha de rede, resposta HTTP sem sucesso, JSON inválido ou ausência do array `elements` aciona os dados locais e o botão de nova tentativa. A autenticação com DummyJSON não autoriza reservas nos estabelecimentos da Overpass.

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

### Verificação da revisão de 26/11/2026

Na revisão, 26 verificações de lógica passaram com componentes React em DOM simulado e respostas controladas para as APIs. Foram conferidos navegação, cadastros, persistência, seleção de estabelecimento, login, sessão, logout, bloqueio de rota, HTTP 401/403, falha de rede, contingência, lista vazia e recuperação pelo botão de nova tentativa.

O ajuste do filtro de serviços também foi conferido com dados remotos sem serviços, opções dos dados locais e recuperação da consulta após uma falha. A compilação de produção foi executada com `npm run build`.

Essas verificações não confirmam a disponibilidade atual das APIs, o carregamento dos mapas, os popups ou a aparência no navegador. Esses pontos devem ser demonstrados com conexão disponível e conferidos também no celular.

## Limitações

- A autenticação utiliza contas demonstrativas da API DummyJSON.
- O cadastro do PetNear não cria contas de autenticação reais.
- Não existe back-end próprio nem banco de dados.
- O agendamento não é enviado aos estabelecimentos.
- As informações dos Pet Shops dependem do cadastro existente no OpenStreetMap.
- Alguns estabelecimentos não possuem horários, endereços ou serviços informados.
- O filtro de serviços fica indisponível quando a fonte carregada não informa serviços; a busca pelo nome permanece disponível.
- As avaliações e distâncias não são calculadas para os registros externos.
- O mapa utiliza uma região demonstrativa de Recife.
- A disponibilidade das APIs depende de serviços externos.
- O localStorage não substitui um sistema de autenticação e armazenamento seguro para produção.

## Uso de Inteligência Artificial

Durante o desenvolvimento, foi utilizada inteligência artificial como ferramenta de apoio para explicações de conceitos, revisão de código, identificação de erros, organização das tarefas e orientação sobre testes.

Na revisão de 26/11/2026, a IA também apoiou a implementação do ajuste do filtro de serviços, da orientação visual e da atualização desta documentação. As alterações foram revisadas e verificadas por compilação e testes de lógica com respostas simuladas.

A implementação das funcionalidades foi acompanhada de testes no ambiente local, utilizando React, Vite, APIs externas e ferramentas de desenvolvimento.

## Controle de versão

O projeto utiliza Git e GitHub para versionamento e colaboração.

As funcionalidades da AV2 foram desenvolvidas em uma branch específica, permitindo revisão por meio de Pull Request antes da integração à branch principal.

O arquivo `.env` é ignorado pelo Git, enquanto `.env.example` documenta a configuração necessária para executar o projeto.

Para concluir a entrega, a equipe deve revisar a versão em conjunto, identificar o commit final e criar a tag `entrega-av2`. No Teams, devem ser enviados o link do repositório e a identificação dessa versão. A apresentação deve usar a versão registrada, com participação de todos os integrantes.

---

**PetNear — conectando você aos cuidados que seu pet precisa. 🐾**

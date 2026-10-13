# Services - AV2 futura

Esta pasta existe apenas para preparar a arquitetura.

Na AV1, nao criar chamadas reais para API.

## Guia PetNear - desenvolvimento AV2

RESPONSAVEL: LENO
NIVEL: DIFICIL

REQUISITO DA AV2:
Atender principalmente as secoes 7.2, 7.3, 8 e 9 do PDF:
consumir dados de uma API aprovada, concentrar `fetch` na pasta
`services`, centralizar a URL-base, tratar HTTP 401/403 e manter
dados locais de contingencia.

OBJETIVO:
Separar comunicacao com API dos componentes React. As paginas devem
chamar funcoes prontas dos services, sem montar `fetch` diretamente
no JSX.

O QUE JA ESTA PRONTO:
A pasta existe e a AV1 usa dados locais em `src/data`.

O QUE FALTA FAZER:
1. Confirmar com o professor qual API foi aprovada.
2. Criar a URL-base em um unico lugar.
3. Criar funcoes de service por dominio.
4. Tratar erros HTTP de forma padronizada.
5. Documentar contrato da API no README principal.

ONDE MODIFICAR:
Somente crie arquivos aqui depois que a API e os endpoints forem
confirmados.

ANTES DE COMECAR:
Estude `fetch`, `async/await`, `try/catch`, `response.ok`,
`response.status`, variaveis de ambiente do Vite e tratamento de
promises.

DICA:
O componente pergunta "quais dados preciso?". O service responde
"como buscar esses dados?".

COMO TESTAR:
1. Teste service com API funcionando.
2. Teste endpoint inexistente.
3. Teste resposta vazia.
4. Teste 401 e 403.

CUIDADOS:
Nao invente endpoints, credenciais ou URL de API. Nao coloque
tokens fixos no codigo.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.

## Referencia do PDF

O PDF permite as seguintes APIs prontas, com uso moderado e
contingencia local obrigatoria:

- DummyJSON: usuarios, produtos, tarefas, receitas, posts e autenticacao.
- BrasilAPI: CEP, feriados, bancos, DDD e FIPE.
- PokeAPI v2: dados de criaturas e itens.
- Open Library: livros, autores e capas.
- TVmaze: series, episodios e elenco.
- Open-Meteo: clima e previsao.

Outra API so entra se for aprovada no checkpoint. Para o PetNear,
nao escolher automaticamente: a equipe ainda precisa registrar se
usara uma API pronta, DummyJSON apenas para login, ou uma API de
Back-end da disciplina.

## Arquivos que podem ser criados depois da aprovacao

| Caminho sugerido | Finalidade | Responsavel | Nivel |
| --- | --- | --- | --- |
| `src/services/apiConfig.js` | Centralizar URL-base e leitura de variaveis de ambiente | Leno | Dificil |
| `src/services/apiClient.js` | Padronizar `fetch`, JSON, erro e status HTTP | Leno | Dificil |
| `src/services/authService.js` | Login, logout e sessao sem salvar senha | Leno | Dificil |
| `src/services/petShopService.js` | Buscar Pet Shops e adaptar contrato da API | Leno | Dificil |
| `src/services/agendamentoService.js` | Enviar e consultar agendamentos | Leno/Anita | Dificil/Medio |
| `src/services/locationService.js` | Consultar CEP/localizacao somente se a API for aprovada | Anita | Medio |

## .env.example futuro

Crie `.env.example` somente quando a equipe souber o nome da variavel
e a URL-base aprovada. Exemplo de finalidade, sem valor real:

```env
VITE_API_BASE_URL=
```

Nao coloque credenciais reais no `.env.example`.

Na AV2, a equipe podera estudar arquivos como:

- `cepService.js`
- `petShopService.js`
- `authService.js`

Possiveis responsabilidades futuras:

- usar `fetch`;
- configurar URL da API;
- consultar CEP;
- carregar Pet Shops remotos;
- fazer login real;
- controlar sessao;
- fazer logout;
- proteger rotas;
- tratar loading;
- tratar erro;
- criar retry.
<!--
GUIA PETNEAR - SERVICES

RESPONSAVEIS: LENO E ANITA
NIVEIS: DIFICIL E MEDIO

Na AV1, nao implemente API real, autenticacao, CEP remoto ou
mapa externo. Esta pasta pode ficar reservada para AV2.

Antes de criar qualquer service, confirme se a tarefa da AV1
nao pode ser feita com dados locais.
-->

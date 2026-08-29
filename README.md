# PetNear

Projeto academico de Front-end Frameworks criado como esqueleto inicial para a AV1.

## Problema e publico

O PetNear auxilia tutores de animais a localizar Pet Shops proximos e organizar servicos para seus pets, como banho, tosa, higiene e corte de unhas.

## Integrantes

- Integrante 1 - preencher
- Integrante 2 - preencher
- Integrante 3 - preencher

## Funcionalidades

- Apresentacao da finalidade do produto.
- Cadastro inicial do tutor.
- Cadastro do pet.
- Localizacao manual.
- Mapa simulado com Pet Shops ficticios.
- Filtro de Pet Shops por servico.
- Escolha de Pet Shop.
- Agendamento de servico.
- Mensagens condicionais.
- Persistencia local futura com `localStorage`.

As funcionalidades principais estao marcadas com TODOs e devem ser implementadas manualmente pela equipe.

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

A persistencia principal sugerida para a AV1 e o pet cadastrado, usando `localStorage`.

Conceitos que a equipe devera estudar:

- `localStorage.setItem()`
- `localStorage.getItem()`
- `JSON.stringify()`
- `JSON.parse()`

## Divisao da equipe

Consulte `TAREFAS.md` para a divisao entre Pessoa 1, Pessoa 2 e Pessoa 3.

## Limitacoes

- Nao existe API real.
- Nao existe autenticacao real.
- Nao existe mapa real.
- O agendamento ainda nao funciona completamente.
- Os formularios ainda nao estao controlados.
- As mensagens condicionais ainda precisam ser implementadas.

## Uso de Inteligencia Artificial

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

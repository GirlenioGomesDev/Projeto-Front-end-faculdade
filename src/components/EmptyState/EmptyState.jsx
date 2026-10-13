/*
=================================================
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: EmptyState.jsx

RESPONSAVEL: BIANKA
NIVEL: FACIL

REQUISITO DA AV2:
Seção 7.2 do PDF: exibir estados de vazio e erro de forma clara,
incluindo acao para tentar novamente quando a falha for recuperavel.

OBJETIVO:
Orientar a evolucao deste componente para mensagens reutilizaveis
sem misturar logica de API nele.

O QUE JA ESTA PRONTO:
Componente recebe titulo e mensagem por props e usa aria-live.

O QUE FALTA FAZER:
1. Avaliar se precisa receber um botao de retry por props.
2. Padronizar texto para vazio, erro e loading em cada pagina.
3. Manter acessibilidade e responsividade.

ONDE MODIFICAR:
Nas props do componente e nos locais onde ele e usado, como Mapa.

ANTES DE COMECAR:
Estude props opcionais, renderizacao condicional e acessibilidade
basica.

DICA:
Este componente mostra a mensagem. A pagina decide se esta em vazio,
erro ou carregamento.

COMO TESTAR:
1. Force lista vazia.
2. Force erro recuperavel.
3. Verifique se o botao de retry chama a funcao certa.

CUIDADOS:
Nao chame fetch aqui dentro.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

/*
=================================================
COMPONENTE: EmptyState
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Mostrar mensagens quando uma lista estiver vazia.

O QUE JA ESTA PRONTO:
Componente reutilizavel recebendo titulo e mensagem por props.

O QUE DEVE SER CONFERIDO:
Manter o uso com renderizacao condicional nas paginas e evoluir para
erro/retry na AV2 se necessario.

CONCEITOS:
props, reutilizacao e renderizacao condicional.
=================================================
*/

/*
=================================================
GUIA PETNEAR - MENSAGEM DE LISTA VAZIA

RESPONSAVEL: LENO
NIVEL: DIFICIL NO USO, LEVE NO VISUAL

REQUISITO DA AV1:
A aplicacao precisa ter mensagem condicional para lista vazia.

ANTES DE COMEÇAR:
Este componente apenas mostra a mensagem. A decisao de quando
mostrar deve ser pensada na pagina que controla a lista.

COMECE POR:
Use o componente para entender qual texto aparece quando nao ha
resultados.

DEPOIS:
No Mapa, provoque uma situacao sem Pet Shops visiveis para
testar se a mensagem faz sentido.

DICA:
A mensagem vazia nao deve aparecer sempre; ela deve aparecer
somente quando a lista realmente nao tiver itens.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function EmptyState({ titulo, mensagem }) {
  return (
    <section className="placeholder-box" aria-live="polite">
      <div>
        <h2>{titulo}</h2>
        <p>{mensagem}</p>
      </div>
    </section>
  );
}

export default EmptyState;

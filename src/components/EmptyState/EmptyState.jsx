/*
=================================================
COMPONENTE: EmptyState
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Mostrar mensagens quando uma lista estiver vazia.

O QUE JA ESTA PRONTO:
Componente reutilizavel recebendo titulo e mensagem por props.

O QUE FALTA:
Usar este componente com renderizacao condicional nas paginas.

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

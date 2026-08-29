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

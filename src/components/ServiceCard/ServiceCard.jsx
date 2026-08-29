/*
=================================================
COMPONENTE: ServiceCard
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Mostrar um servico do PetNear em formato reutilizavel.

O QUE JA ESTA PRONTO:
Estrutura recebendo titulo e descricao por props.

O QUE FALTA:
Ajustar icones, cores e textos finais.

CONCEITOS:
props e reutilizacao de componente.
=================================================
*/

/*
=================================================
GUIA PETNEAR - CARD DE SERVICO

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
Este componente ajuda a demonstrar props, componente funcional e
reutilizacao visual.

COMECE POR:
Veja quais informacoes mudam de um servico para outro.

DEPOIS:
Confira se o card continua claro quando recebe textos maiores ou
menores.

DICA:
Componentes simples tambem contam para mostrar organizacao do
projeto.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function ServiceCard({ titulo, descricao }) {
  return (
    <article className="card">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </article>
  );
}

export default ServiceCard;

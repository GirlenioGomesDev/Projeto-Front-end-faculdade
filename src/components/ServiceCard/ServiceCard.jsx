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

function ServiceCard({ titulo, descricao }) {
  return (
    <article className="card">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </article>
  );
}

export default ServiceCard;

/*
=================================================
COMPONENTE: BenefitCard
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Exibir beneficios do uso do PetNear.

O QUE JA ESTA PRONTO:
Card simples usando props.

O QUE FALTA:
Melhorar conteudo e padronizar com o restante da interface.

CONCEITOS:
props, componentes funcionais e CSS global.
=================================================
*/

function BenefitCard({ titulo, texto }) {
  return (
    <article className="card">
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </article>
  );
}

export default BenefitCard;

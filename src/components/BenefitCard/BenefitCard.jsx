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

/*
=================================================
GUIA PETNEAR - CARD DE BENEFICIO

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
Este componente reforca a comunicacao da finalidade do produto e
o uso de componentes reutilizaveis com props.

COMECE POR:
Leia cada beneficio na Home e veja se ele ajuda o usuario a
entender o PetNear.

DEPOIS:
Verifique se os cards mantem o mesmo padrao visual.

DICA:
Antes de mexer em estilo, confirme que o conteudo esta claro.

NAO ESCREVA A SOLUCAO.
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

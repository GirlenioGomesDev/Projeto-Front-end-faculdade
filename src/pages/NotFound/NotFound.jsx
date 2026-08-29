import { Link } from 'react-router-dom';

/*
=================================================
PAGINA: NotFound
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Mostrar uma tela simples quando a rota nao existir.

O QUE JA ESTA PRONTO:
Mensagem e link para voltar para Home.

O QUE FALTA:
Melhorar texto e estilo caso a equipe queira.

CONCEITOS:
rota coringa, Link e navegacao.
=================================================
*/

/*
=================================================
GUIA PETNEAR - NOTFOUND

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
A navegacao precisa ser completa e clara. Uma rota inexistente
nao deve deixar o usuario perdido em uma tela vazia.

COMECE POR:
Teste um endereco que nao existe e veja se esta pagina aparece.

DEPOIS:
Confirme se existe um caminho claro para voltar ao inicio.

DICA:
Esta e uma tarefa boa para revisar texto, acessibilidade basica
e consistencia visual sem mexer na logica principal do projeto.

COMO TESTAR:
Digite uma rota inexistente no navegador e use o botao de retorno.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function NotFound() {
  return (
    <section className="page">
      <h1 className="page-title">Pagina nao encontrada</h1>
      <p className="page-description">
        A rota acessada nao existe no PetNear.
      </p>
      <div className="button-row">
        <Link className="button" to="/">
          Voltar para Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

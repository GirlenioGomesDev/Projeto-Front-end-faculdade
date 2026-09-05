import { Link } from 'react-router-dom';
import './Banner.css';

/*
=================================================
COMPONENTE: Banner
NIVEL: LEVE
RESPONSAVEL SUGERIDO: PESSOA 3

FUNCAO:
Apresentar a chamada principal da Home.

O QUE JA ESTA PRONTO:
Texto, imagem local de placeholder e botoes com Link.

O QUE FALTA:
Escolher imagem final e melhorar o acabamento visual.

CONCEITOS:
Link, props simples no futuro, CSS e componente reutilizavel.
=================================================
*/

/*
=================================================
GUIA PETNEAR - BANNER

RESPONSAVEL: BIANKA
NIVEL: LEVE

REQUISITO DA AV1:
O primeiro contato do usuario precisa explicar a finalidade do
PetNear e oferecer caminhos de navegacao.

COMECE POR:
Leia o titulo, o texto e os botoes como se fosse o primeiro uso
do aplicativo.

DEPOIS:
Teste se os botoes levam para paginas uteis do fluxo.

QUANDO ISSO FUNCIONAR:
Trabalhe o visual no CSS sem alterar a ideia principal do
produto.

CONCEITOS PARA ESTUDAR:
- Link
- navegacao
- componente visual
- CSS

NAO ESCREVA A SOLUCAO.
=================================================
*/

function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <p className="banner__eyebrow">BANHO E TOSA PERTO DE VOCÊ</p>
        <h1>Encontre o pet shop ideal para o seu pet</h1>
        <p>
          O PetNear facilita sua busca por serviços de banho e tosa 
          próximos à sua localização.
        </p>
        <div className="button-row">
          <Link className="button" to="/cadastros">
            Encontrar um Pet Shop
          </Link>
          <Link className="button secondary" to="/agendamento">
            Agendar agora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;

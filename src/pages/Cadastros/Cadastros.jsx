import UserForm from '../../components/UserForm/UserForm.jsx';
import PetForm from '../../components/PetForm/PetForm.jsx';
import LocationForm from '../../components/LocationForm/LocationForm.jsx';

/*
=================================================
PAGINA: Cadastros
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Agrupar as etapas de cadastro do tutor, cadastro do pet e localizacao.

O QUE JA ESTA PRONTO:
Estrutura visual das tres etapas.

O QUE FALTA:
Controlar o fluxo entre etapas usando estado e validacoes.

CONCEITOS:
useState, formularios controlados, eventos, validacao e localStorage.
=================================================
*/

/*
=================================================
GUIA PETNEAR - CADASTROS

RESPONSAVEL: ANITA
NIVEL: MEDIO

REQUISITO DA AV1:
Esta pagina ajuda a cumprir a rota de cadastro, o formulario
controlado, validacoes, mensagens condicionais e uma acao que
altera estado.

ANTES DE COMEÇAR:
Teste visualmente os tres formularios como estao. Entenda a
funcao de cada etapa antes de tentar conectar tudo.

COMECE POR:
Trabalhe primeiro com cada formulario isolado. O cadastro do
tutor, o cadastro do pet e a localizacao precisam fazer sentido
separadamente.

DEPOIS:
Quando cada parte estiver compreendida, pense no fluxo entre
Tutor, Pet e Localizacao.

QUANDO ISSO FUNCIONAR:
Escolha qual dado relevante devera permanecer disponivel depois
de atualizar a pagina. Para a AV1, o pet cadastrado e uma boa
opcao pedagogica.

DICA:
Nao comece pela persistencia. Primeiro garanta que os dados
digitados estao corretos e que as validacoes aparecem no momento
certo.

CONCEITOS PARA ESTUDAR:
- estado
- formularios controlados
- eventos
- renderizacao condicional
- persistencia local

COMO TESTAR:
Preencha as etapas em ordem, tente continuar com campos vazios
e confira se a interface orienta o usuario.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function Cadastros() {
  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Cadastros</h1>
        <p className="page-description">
          Fluxo inicial para cadastrar tutor, pet e localizacao. Na AV1 tudo
          sera local e sem autenticacao real.
        </p>
      </header>

      <div className="grid">
        <article className="card">
          <h2>Etapa 1 - Cadastro do tutor</h2>
          <UserForm />
        </article>

        <article className="card">
          <h2>Etapa 2 - Cadastro do pet</h2>
          <PetForm />
        </article>

        <article className="card">
          <h2>Etapa 3 - Localizacao</h2>
          <LocationForm />
        </article>
      </div>

      {/* =================================================
      TODO AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 2

      OBJETIVO:
      Transformar as tres etapas em um fluxo guiado.

      O QUE VOCE DEVE FAZER:
      1. Criar um estado etapaAtual.
      2. Mostrar apenas a etapa correspondente.
      3. Validar os campos antes de avancar.
      4. Guardar o pet cadastrado em estado.
      5. Estudar localStorage para persistir o pet.

      CONCEITOS:
      useState
      renderizacao condicional
      formulario controlado
      localStorage

      COMO TESTAR:
      Preencha tutor, pet e localizacao seguindo a ordem.

      RESULTADO ESPERADO:
      O cadastro do pet deve ser uma das acoes que alteram estado.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}
    </section>
  );
}

export default Cadastros;

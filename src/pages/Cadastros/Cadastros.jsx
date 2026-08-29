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

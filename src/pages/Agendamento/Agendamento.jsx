import ScheduleForm from '../../components/ScheduleForm/ScheduleForm.jsx';

/*
=================================================
PAGINA: Agendamento
NIVEL: DIFICIL
RESPONSAVEL SUGERIDO: PESSOA 3 NA PARTE VISUAL, PESSOA 1 OU 2 NA LOGICA

FUNCAO:
Preparar a tela onde o usuario escolhera servico, data e horario.

O QUE JA ESTA PRONTO:
Estrutura visual com exemplo de pet, Pet Shop selecionado e formulario.

O QUE FALTA:
Ler dados reais do pet/Pet Shop, validar e confirmar o agendamento.

CONCEITOS:
useState, localStorage, validacao, renderizacao condicional e eventos.
=================================================
*/

function Agendamento() {
  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Agendamento</h1>
        <p className="page-description">
          Tela preparada para confirmar servico, data e horario. A logica sera
          implementada pela equipe durante a AV1.
        </p>
      </header>

      <div className="grid">
        <article className="card">
          <h2>Seu pet</h2>
          <p>Mel</p>
          <p>Shih-tzu</p>
          <p>Pequeno porte</p>
        </article>

        <article className="card">
          <h2>Pet Shop selecionado</h2>
          <p>Pet Shop Patinhas</p>
          <p>Exemplo visual enquanto a selecao real nao foi criada.</p>
        </article>

        <article className="card">
          <h2>Escolha o servico</h2>
          <ScheduleForm />
        </article>
      </div>

      <section className="section-band">
        <div className="placeholder-box">
          <div>
            <h2>Confirmacao futura</h2>
            <p>Agendamento realizado com sucesso!</p>
          </div>
        </div>
      </section>

      {/* =================================================
      TODO AV1
      NIVEL: DIFICIL
      RESPONSAVEL SUGERIDO: PESSOA 1 OU PESSOA 2

      OBJETIVO:
      Exibir confirmacao somente depois de um agendamento valido.

      O QUE VOCE DEVE FAZER:
      1. Criar estado para controlar sucesso.
      2. Validar servico, data e horario.
      3. Montar o objeto de agendamento.
      4. Exibir dados como pet, servico, Pet Shop, data e horario.
      5. Persistir o agendamento se a equipe escolher esta estrategia.

      CONCEITOS:
      renderizacao condicional
      estado de sucesso
      validacao
      persistencia

      COMO TESTAR:
      Confirme sem preencher dados e depois preencha todos os campos.

      RESULTADO ESPERADO:
      A mensagem de sucesso deve aparecer apenas com dados validos.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}
    </section>
  );
}

export default Agendamento;

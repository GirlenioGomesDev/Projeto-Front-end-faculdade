import horarios from '../../data/horarios.json';
import servicos from '../../data/servicos.json';

/*
=================================================
COMPONENTE: ScheduleForm
NIVEL: DIFICIL
RESPONSAVEL SUGERIDO: PESSOA 1 OU PESSOA 2

FUNCAO:
Preparar o formulario visual de agendamento.

O QUE JA ESTA PRONTO:
Campos de servico, data, horario e botao de confirmacao.

O QUE FALTA:
Controlar estados, validar campos e montar o objeto de agendamento.

CONCEITOS:
useState, eventos, validacao, localStorage e renderizacao condicional.
=================================================
*/

function ScheduleForm() {
  return (
    <form className="form-grid">
      <div className="field">
        <label htmlFor="servico">Servico</label>
        <select id="servico" name="servico" defaultValue="">
          <option value="">Escolha um servico</option>
          {servicos.map((servico) => (
            <option key={servico.id} value={servico.nome}>
              {servico.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="data">Data</label>
        <input id="data" name="data" type="date" />
      </div>

      <div className="field">
        <label htmlFor="horario">Horario</label>
        <select id="horario" name="horario" defaultValue="">
          <option value="">Escolha um horario</option>
          {horarios.map((horario) => (
            <option key={horario.id} value={horario.hora}>
              {horario.hora}
            </option>
          ))}
        </select>
      </div>

      <button className="button" type="submit">
        Confirmar Agendamento
      </button>

      {/* =================================================
      TODO AV1
      NIVEL: DIFICIL
      RESPONSAVEL SUGERIDO: PESSOA 1 OU PESSOA 2

      OBJETIVO:
      Criar a logica de agendamento.

      O QUE VOCE DEVE FAZER:
      1. Criar estado para servico.
      2. Criar estado para data.
      3. Criar estado para horario.
      4. Validar campos obrigatorios.
      5. Montar um objeto de agendamento.
      6. Mostrar mensagem "Agendamento realizado com sucesso!".
      7. Estudar persistencia com localStorage se a equipe escolher salvar.

      CONCEITOS:
      useState
      eventos
      validacao
      renderizacao condicional
      localStorage

      COMO TESTAR:
      Tente confirmar sem dados e depois com servico, data e horario.

      RESULTADO ESPERADO:
      Apenas dados validos devem gerar confirmacao.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}
    </form>
  );
}

export default ScheduleForm;

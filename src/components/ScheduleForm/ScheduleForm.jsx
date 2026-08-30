import {useState} from 'react';

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

/*
=================================================
GUIA PETNEAR - FORMULARIO DE AGENDAMENTO

RESPONSAVEIS:
LENO - DIFICIL
ANITA - MEDIO, apoio nas validacoes

REQUISITO DA AV1:
Este componente ajuda na acao de agendamento, validacao e
mensagem de sucesso apos uma acao do usuario.

ANTES DE COMEÇAR:
Confira se os dados locais de servicos e horarios aparecem na
tela. Antes de controlar escolhas, a listagem precisa estar
correta.

COMECE POR:
Escolha uma parte do formulario, como servico, e entenda qual
informacao muda quando o usuario interage.

DEPOIS:
Repita a ideia para data e horario, sempre testando uma parte
antes de seguir para a proxima.

QUANDO ISSO FUNCIONAR:
Planeje as validacoes. O usuario precisa receber uma mensagem
quando faltar alguma informacao obrigatoria.

DICA:
O formulario de agendamento e mais facil quando tratado em
camadas: escolha, validacao, confirmacao e depois persistencia,
se a equipe decidir salvar esse dado.

CONCEITOS PARA ESTUDAR:
- estado
- eventos
- formulario
- validacao
- renderizacao condicional

COMO TESTAR:
Tente confirmar vazio, depois preencha cada campo aos poucos e
observe qual mensagem deveria aparecer.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function ScheduleForm({ petShopSelecionado }) { 
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [sucesso, setSucesso] = useState(false); 
  const [agendamentoConfirmado, setAgendamentoConfirmado] = useState(null);
  const dataHoje = new Date().toISOString().split('T')[0];

  function handleSubmit(event) {
    event.preventDefault();
    setSucesso(false); // Resetar o estado de sucesso antes de validar

    if (!servico || !data || !horario) {
      alert('Por favor, preencha todos os campos.');
      return;
    
    }

    if (data < dataHoje) {
      alert('Escolha uma data válida. Não é possível agendar em uma data passada.');
      return;
    }

    if (!petShopSelecionado) {
      alert('selecione um Pet Shop antes de realizar o agendamento.');
      return;
    }

    const agendamento = {
      servico: servico,
      data: data,
      horario: horario,
      petShop: petShopSelecionado?.nome,
    };

    setAgendamentoConfirmado(agendamento);

    console.log('Agendamento realizado:', agendamento);
    localStorage.setItem('agendamento', JSON.stringify(agendamento));
       setSucesso(true);
       setServico('');
       setData('');
       setHorario('');
  }
  

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="servico">Servico</label>
        <select id="servico" name="servico" value={servico} onChange={(event) => setServico(event.target.value)}>
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
        <input id="data" name="data" type="date" value={data} min={dataHoje} onChange={(event) => setData(event.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="horario">Horario</label>
        <select id="horario" name="horario" value={horario} onChange={(event) => setHorario(event.target.value)}>
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
      {sucesso && agendamentoConfirmado && (
        <div>
          <p>Agendamento realizado com sucesso!</p>
          <p>Serviço: {agendamentoConfirmado.servico}</p>
          <p>Data: {agendamentoConfirmado.data}</p>
          <p>Horário: {agendamentoConfirmado.horario}</p>
          <p>Pet Shop: {agendamentoConfirmado.petShop}</p>
        </div>
      )}

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

import { useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  PawPrint,
  Scissors,
  Store,
} from 'lucide-react';

import horarios from '../../data/horarios.json';
import servicos from '../../data/servicos.json';

/*
=================================================
COMPONENTE: ScheduleForm
NIVEL: DIFICIL
RESPONSAVEL SUGERIDO: PESSOA 1 OU PESSOA 2

FUNCAO:
Controlar o formulario de agendamento.

CONCEITOS:
useState, eventos, validacao, localStorage
e renderizacao condicional.
=================================================
*/

function ScheduleForm({
  petShopSelecionado,
  petCadastrado,
}) {
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const [sucesso, setSucesso] = useState(false);

  const [
    agendamentoConfirmado,
    setAgendamentoConfirmado,
  ] = useState(null);

  const dataHoje = new Date()
    .toISOString()
    .split('T')[0];

  const servicosDisponiveis = servicos.filter(
    (item) =>
      petShopSelecionado?.servicos.includes(
        item.nome
      )
  );

  function formatarData(dataSelecionada) {
    if (!dataSelecionada) {
      return '';
    }

    const [ano, mes, dia] =
      dataSelecionada.split('-');

    return `${dia}/${mes}/${ano}`;
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSucesso(false);

    if (!petShopSelecionado) {
      alert(
        'Selecione um Pet Shop antes de realizar o agendamento.'
      );

      return;
    }

    if (!petCadastrado) {
      alert(
        'Cadastre um pet antes de realizar o agendamento.'
      );

      return;
    }

    if (!servico || !data || !horario) {
      alert(
        'Por favor, preencha todos os campos.'
      );

      return;
    }

    if (data < dataHoje) {
      alert(
        'Escolha uma data válida. Não é possível agendar em uma data passada.'
      );

      return;
    }

    const agendamento = {
      servico,
      data,
      horario,
      pet: petCadastrado.nome,
      petShop: petShopSelecionado.nome,
    };

    setAgendamentoConfirmado(agendamento);

    console.log(
      'Agendamento realizado:',
      agendamento
    );

    localStorage.setItem(
      'agendamento',
      JSON.stringify(agendamento)
    );

    setSucesso(true);

    setServico('');
    setData('');
    setHorario('');
  }

  return (
    <form
      className="form-grid schedule-form"
      onSubmit={handleSubmit}
    >

      {/* SERVICO */}
      <div className="field schedule-field">
        <label htmlFor="servico">
          Serviço
        </label>

        <div className="schedule-input">
          <Scissors size={18} />

          <select
            id="servico"
            name="servico"
            value={servico}
            onChange={(event) =>
              setServico(event.target.value)
            }
          >
            <option value="">
              Escolha um serviço
            </option>

            {servicosDisponiveis.map(
              (item) => (
                <option
                  key={item.id}
                  value={item.nome}
                >
                  {item.nome}
                </option>
              )
            )}
          </select>
        </div>
      </div>


      {/* DATA E HORARIO */}
      <div className="schedule-row">

        <div className="field schedule-field">
          <label htmlFor="data">
            Data
          </label>

          <div className="schedule-input">
            <CalendarDays size={18} />

            <input
              id="data"
              name="data"
              type="date"
              value={data}
              min={dataHoje}
              onChange={(event) =>
                setData(event.target.value)
              }
            />
          </div>
        </div>


        <div className="field schedule-field">
          <label htmlFor="horario">
            Horário
          </label>

          <div className="schedule-input">
            <Clock3 size={18} />

            <select
              id="horario"
              name="horario"
              value={horario}
              onChange={(event) =>
                setHorario(event.target.value)
              }
            >
              <option value="">
                Escolha um horário
              </option>

              {horarios.map((item) => (
                <option
                  key={item.id}
                  value={item.hora}
                >
                  {item.hora}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>


      {/* RESUMO DA ESCOLHA */}
      {(servico || data || horario) && (
        <div className="schedule-preview">

          <span className="schedule-preview__title">
            Resumo da escolha
          </span>

          <div className="schedule-preview__items">

            <div>
              <Scissors size={16} />

              <span>
                {servico || 'Serviço não escolhido'}
              </span>
            </div>

            <div>
              <CalendarDays size={16} />

              <span>
                {data
                  ? formatarData(data)
                  : 'Data não escolhida'}
              </span>
            </div>

            <div>
              <Clock3 size={16} />

              <span>
                {horario ||
                  'Horário não escolhido'}
              </span>
            </div>

          </div>

        </div>
      )}


      {/* BOTAO */}
      <button
        className="button schedule-submit"
        type="submit"
      >
        <CalendarDays size={18} />

        Confirmar agendamento
      </button>


      {/* SUCESSO */}
      {sucesso &&
        agendamentoConfirmado && (
          <div className="schedule-success">

            <div className="schedule-success__header">

              <div className="schedule-success__icon">
                <CheckCircle2 size={24} />
              </div>

              <div>
                <span>
                  Agendamento confirmado
                </span>

                <h3>
                  Agendamento realizado com
                  sucesso!
                </h3>
              </div>

            </div>


            <div className="schedule-success__details">

              <div className="schedule-success__item">
                <PawPrint size={17} />

                <div>
                  <span>Pet</span>

                  <strong>
                    {
                      agendamentoConfirmado.pet
                    }
                  </strong>
                </div>
              </div>


              <div className="schedule-success__item">
                <Store size={17} />

                <div>
                  <span>Pet Shop</span>

                  <strong>
                    {
                      agendamentoConfirmado.petShop
                    }
                  </strong>
                </div>
              </div>


              <div className="schedule-success__item">
                <Scissors size={17} />

                <div>
                  <span>Serviço</span>

                  <strong>
                    {
                      agendamentoConfirmado.servico
                    }
                  </strong>
                </div>
              </div>


              <div className="schedule-success__item">
                <CalendarDays size={17} />

                <div>
                  <span>Data</span>

                  <strong>
                    {formatarData(
                      agendamentoConfirmado.data
                    )}
                  </strong>
                </div>
              </div>


              <div className="schedule-success__item">
                <Clock3 size={17} />

                <div>
                  <span>Horário</span>

                  <strong>
                    {
                      agendamentoConfirmado.horario
                    }
                  </strong>
                </div>
              </div>

            </div>

          </div>
        )}

    </form>
  );
}

export default ScheduleForm;
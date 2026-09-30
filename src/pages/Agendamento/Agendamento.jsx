import {
  CalendarDays,
  MapPin,
  PawPrint,
  Store,
  Info,
} from 'lucide-react';

import ScheduleForm from '../../components/ScheduleForm/ScheduleForm.jsx';

/*
=================================================
PAGINA: Agendamento
NIVEL: DIFICIL

RESPONSAVEIS:
BIANKA - estrutura visual
LENO - logica principal
ANITA - validacoes e persistencia

FUNCAO:
Permitir que o usuario escolha servico,
data e horario para o pet selecionado.
=================================================
*/

function Agendamento() {
  const petShopSelecionado = JSON.parse(
    localStorage.getItem('petShopSelecionado')
  );

  const petCadastrado = JSON.parse(
    localStorage.getItem('petCadastrado')
  );

  return (
    <section className="page agendamento-page">

      {/* CABECALHO */}
      <header className="page-header agendamento-header">
        <span className="section-eyebrow">
          Atendimento
        </span>

        <h1 className="page-title">
          Agende um serviço
        </h1>

        <p className="page-description">
          Confira os dados do seu pet e do Pet Shop escolhido.
          Depois selecione o serviço, a data e o horário desejado.
        </p>
      </header>

      {/* CONTEUDO PRINCIPAL */}
      <div className="agendamento-layout">

        {/* COLUNA DE RESUMO */}
        <aside className="agendamento-summary">

          {/* PET */}
          <article className="card agendamento-info-card">

            <div className="agendamento-info-card__header">
              <div className="agendamento-info-card__icon">
                <PawPrint size={22} />
              </div>

              <div>
                <span>Seu pet</span>
                <h2>
                  {petCadastrado
                    ? petCadastrado.nome
                    : 'Pet não cadastrado'}
                </h2>
              </div>
            </div>

            {petCadastrado ? (
              <div className="agendamento-info-list">

                <div className="agendamento-info-row">
                  <span>Raça</span>

                  <strong>
                    {petCadastrado.raca || 'Não informada'}
                  </strong>
                </div>

                <div className="agendamento-info-row">
                  <span>Porte</span>

                  <strong>
                    {petCadastrado.porte || 'Não informado'}
                  </strong>
                </div>

              </div>
            ) : (
              <div className="agendamento-warning">
                <Info size={18} />

                <p>
                  Nenhum pet foi cadastrado.
                </p>
              </div>
            )}

          </article>


          {/* PET SHOP */}
          <article className="card agendamento-info-card">

            <div className="agendamento-info-card__header">
              <div className="agendamento-info-card__icon">
                <Store size={22} />
              </div>

              <div>
                <span>Pet Shop</span>

                <h2>
                  {petShopSelecionado
                    ? petShopSelecionado.nome
                    : 'Nenhum selecionado'}
                </h2>
              </div>
            </div>

            {petShopSelecionado ? (
              <div className="agendamento-shop-address">
                <MapPin size={18} />

                <p>
                  {petShopSelecionado.endereco}
                  {' - '}
                  {petShopSelecionado.bairro},
                  {' '}
                  {petShopSelecionado.cidade}
                </p>
              </div>
            ) : (
              <div className="agendamento-warning">
                <Info size={18} />

                <p>
                  Selecione um Pet Shop no mapa antes de realizar
                  o agendamento.
                </p>
              </div>
            )}

          </article>

        </aside>


        {/* FORMULARIO */}
        <article className="card agendamento-form-card">

          <div className="agendamento-form-card__header">

            <div className="agendamento-form-card__icon">
              <CalendarDays size={24} />
            </div>

            <div>
              <span className="agendamento-form-card__eyebrow">
                Novo agendamento
              </span>

              <h2>
                Escolha o serviço
              </h2>

              <p>
                Informe o serviço, a data e o horário desejado
                para concluir.
              </p>
            </div>

          </div>

          <div className="agendamento-form-card__content">
            <ScheduleForm
              petShopSelecionado={petShopSelecionado}
              petCadastrado={petCadastrado}
            />
          </div>

        </article>

      </div>

    </section>
  );
}

export default Agendamento;
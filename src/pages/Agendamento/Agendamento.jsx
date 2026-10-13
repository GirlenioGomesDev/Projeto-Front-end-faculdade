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
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: Agendamento.jsx

RESPONSAVEIS: LENO, ANITA E BIANKA
NIVEL: DIFICIL

REQUISITO DA AV2:
Seções 7.2 e 7.4 do PDF: usar rota protegida, consumir dados pela
camada de services, preservar sessao sem guardar senhas e tratar
estados de erro.

OBJETIVO:
Mostrar o resumo do pet e do Pet Shop escolhido antes de enviar o
agendamento.

O QUE JA ESTA PRONTO:
A AV1 recupera pet e Pet Shop do localStorage, mostra avisos quando
faltam dados e renderiza o ScheduleForm.

O QUE FALTA FAZER:
1. Proteger esta pagina depois que autenticacao estiver pronta.
2. Validar se os dados do localStorage continuam confiaveis.
3. Buscar dados atualizados do Pet Shop pela API, se necessario.
4. Exibir estados de loading, erro e tentar novamente.
5. Manter a interface responsiva ao adicionar novos estados.

ONDE MODIFICAR:
Nas leituras de localStorage, na rota em App.jsx e no ScheduleForm.

ANTES DE COMEÇAR:
Estude rota protegida, sessao, JSON.parse com seguranca e estados
condicionais.

DICA:
Antes de enviar agendamento para API, confirme se usuario, pet e
Pet Shop existem e pertencem ao fluxo atual.

COMO TESTAR:
1. Abra /agendamento sem pet ou Pet Shop.
2. Abra com dados salvos.
3. Atualize a pagina e confira se o resumo permanece coerente.

CUIDADOS:
Nao transforme localStorage em banco de dados definitivo da AV2.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

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
  // AV2 - RESPONSAVEL: LENO
  // NIVEL: DIFICIL
  // TODO: Validar os dados lidos do localStorage e tratar JSON invalido.
  //
  // DICA: se a API estiver disponivel, use o id salvo para buscar dados
  // atualizados em vez de confiar cegamente no objeto antigo.
  // TESTE: apague ou altere valores do localStorage e recarregue a pagina.
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

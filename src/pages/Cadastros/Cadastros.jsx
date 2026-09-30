import { useState } from 'react';
import {
  User,
  PawPrint,
  MapPin,
  ArrowLeft,
} from 'lucide-react';

import UserForm from '../../components/UserForm/UserForm.jsx';
import PetForm from '../../components/PetForm/PetForm.jsx';
import LocationForm from '../../components/LocationForm/LocationForm.jsx';

/*
=================================================
PAGINA: Cadastros
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Agrupar as etapas de cadastro do tutor,
cadastro do pet e localizacao.

CONCEITOS:
useState, formularios controlados,
eventos, validacao e localStorage.
=================================================
*/

function Cadastros() {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [dadosTutor, setDadosTutor] = useState({});
  const [dadosPet, setDadosPet] = useState({});

  function voltarEtapa() {
    if (etapaAtual > 1) {
      setEtapaAtual((etapa) => etapa - 1);
    }
  }

  return (
    <section className="page cadastro-page">

      {/* CABECALHO */}
      <header className="page-header cadastro-header">
        <span className="section-eyebrow">
          Cadastro inicial
        </span>

        <h1 className="page-title">
          Cadastre você e seu pet
        </h1>

        <p className="page-description">
          Complete as etapas abaixo para preparar seu perfil
          e encontrar serviços próximos para o seu pet.
        </p>
      </header>

      {/* INDICADOR DAS ETAPAS */}
      <div className="cadastro-steps">

        {/* TUTOR */}
        <div
          className={`cadastro-step ${
            etapaAtual === 1 ? 'current' : ''
          } ${
            etapaAtual > 1 ? 'active' : ''
          }`}
        >
          <div className="cadastro-step__icon">
            <User size={20} />
          </div>

          <div className="cadastro-step__text">
            <strong>Tutor</strong>
            <span>Seus dados</span>
          </div>
        </div>

        <div
          className={`cadastro-step__line ${
            etapaAtual >= 2 ? 'active' : ''
          }`}
        />

        {/* PET */}
        <div
          className={`cadastro-step ${
            etapaAtual === 2 ? 'current' : ''
          } ${
            etapaAtual > 2 ? 'active' : ''
          }`}
        >
          <div className="cadastro-step__icon">
            <PawPrint size={20} />
          </div>

          <div className="cadastro-step__text">
            <strong>Pet</strong>
            <span>Dados do animal</span>
          </div>
        </div>

        <div
          className={`cadastro-step__line ${
            etapaAtual >= 3 ? 'active' : ''
          }`}
        />

        {/* LOCALIZACAO */}
        <div
          className={`cadastro-step ${
            etapaAtual === 3 ? 'current' : ''
          }`}
        >
          <div className="cadastro-step__icon">
            <MapPin size={20} />
          </div>

          <div className="cadastro-step__text">
            <strong>Localização</strong>
            <span>Onde você está</span>
          </div>
        </div>
      </div>

      {/* CONTEUDO */}
      <div className="cadastro-content">

        {/* ETAPA 1 */}
        {etapaAtual === 1 && (
          <article className="card cadastro-card">

            <div className="cadastro-card__header">
              <span className="cadastro-card__step">
                Etapa 1 de 3
              </span>

              <h2>Cadastro do tutor</h2>

              <p>
                Informe seus dados principais para continuar.
              </p>
            </div>

            <UserForm
              onContinuar={(dados) => {
                setDadosTutor(dados);
                setEtapaAtual(2);
              }}
            />

          </article>
        )}

        {/* ETAPA 2 */}
        {etapaAtual === 2 && (
          <article className="card cadastro-card">

            <div className="cadastro-card__top">
              <button
                type="button"
                className="cadastro-back"
                onClick={voltarEtapa}
              >
                <ArrowLeft size={17} />
                Voltar
              </button>
            </div>

            <div className="cadastro-card__header">
              <span className="cadastro-card__step">
                Etapa 2 de 3
              </span>

              <h2>Cadastro do pet</h2>

              <p>
                Agora informe os principais dados do seu pet.
              </p>
            </div>

            <PetForm
              onContinuar={(dados) => {
                setDadosPet(dados);
                setEtapaAtual(3);
              }}
            />

          </article>
        )}

        {/* ETAPA 3 */}
        {etapaAtual === 3 && (
          <article className="card cadastro-card">

            <div className="cadastro-card__top">
              <button
                type="button"
                className="cadastro-back"
                onClick={voltarEtapa}
              >
                <ArrowLeft size={17} />
                Voltar
              </button>
            </div>

            <div className="cadastro-card__header">
              <span className="cadastro-card__step">
                Etapa 3 de 3
              </span>

              <h2>Localização</h2>

              <p>
                Informe sua localização para encontrar opções
                próximas de você.
              </p>
            </div>

            <LocationForm />

          </article>
        )}

      </div>

    </section>
  );
}

export default Cadastros;
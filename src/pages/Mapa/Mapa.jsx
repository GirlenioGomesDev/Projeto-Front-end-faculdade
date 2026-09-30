import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  MapPinned,
  Store,
} from 'lucide-react';

import EmptyState from '../../components/EmptyState/EmptyState.jsx';
import PetShopCard from '../../components/PetShopCard/PetShopCard.jsx';
import petshops from '../../data/petshops.json';

/*
=================================================
PAGINA: Mapa
NIVEL: DIFICIL
RESPONSAVEL SUGERIDO: PESSOA 1

FUNCAO:
Simular um mapa e listar Pet Shops ficticios proximos.

REQUISITOS TRABALHADOS:
- dados locais
- busca controlada por estado
- filtro por servico
- lista vazia
- selecao de Pet Shop
- localStorage
- navegacao
=================================================
*/

function Mapa() {
  const [filtroServico, setFiltroServico] = useState('');
  const [buscaNome, setBuscaNome] = useState('');

  const navigate = useNavigate();

  const petshopsVisiveis = petshops.filter((petShop) => {
    const correspondeNome = petShop.nome
      .toLowerCase()
      .includes(buscaNome.trim().toLowerCase());

    const correspondeServico =
      filtroServico === '' ||
      petShop.servicos.includes(filtroServico);

    return correspondeNome && correspondeServico;
  });

  function selecionarPetShop(petShop) {
    console.log('Pet Shop selecionado:', petShop);

    localStorage.setItem(
      'petShopSelecionado',
      JSON.stringify(petShop)
    );

    navigate('/agendamento');
  }

  function limparFiltros() {
    setBuscaNome('');
    setFiltroServico('');
  }

  const filtrosAtivos =
    buscaNome.trim() !== '' || filtroServico !== '';

  return (
    <section className="page mapa-page">

      {/* CABECALHO */}
      <header className="page-header mapa-header">
        <span className="section-eyebrow">
          Encontre perto de você
        </span>

        <h1 className="page-title">
          Pet Shops próximos
        </h1>

        <p className="page-description">
          Pesquise estabelecimentos, filtre pelos serviços disponíveis
          e escolha onde deseja realizar o atendimento do seu pet.
        </p>
      </header>

      {/* MAPA SIMULADO */}
      <div className="mapa-preview">
        <div className="mapa-preview__overlay">
          <div className="mapa-preview__badge">
            <MapPinned size={18} />

            <span>Mapa demonstrativo</span>
          </div>

          <div className="mapa-preview__info">
            <h2>
              Veja opções próximas
            </h2>

            <p>
              Nesta etapa da AV1 os estabelecimentos são carregados
              a partir dos dados locais do projeto.
            </p>
          </div>
        </div>

        <div className="mapa-preview__marker mapa-preview__marker--1">
          <MapPin size={20} />
        </div>

        <div className="mapa-preview__marker mapa-preview__marker--2">
          <MapPin size={20} />
        </div>

        <div className="mapa-preview__marker mapa-preview__marker--3">
          <MapPin size={20} />
        </div>

        <div className="mapa-preview__marker mapa-preview__marker--4">
          <MapPin size={20} />
        </div>
      </div>

      {/* BUSCA E FILTROS */}
      <section className="mapa-results">

        <div className="mapa-toolbar">
          <div className="mapa-toolbar__title">
            <div className="mapa-toolbar__icon">
              <Store size={21} />
            </div>

            <div>
              <h2>Encontre um Pet Shop</h2>

              <p>
                Use a busca ou filtre pelo serviço desejado.
              </p>
            </div>
          </div>

          <div className="mapa-toolbar__fields">

            {/* BUSCA */}
            <div className="mapa-search">
              <label htmlFor="buscaNome">
                Buscar pelo nome
              </label>

              <div className="mapa-search__input">
                <Search size={19} />

                <input
                  id="buscaNome"
                  type="text"
                  placeholder="Digite o nome do Pet Shop"
                  value={buscaNome}
                  onChange={(event) =>
                    setBuscaNome(event.target.value)
                  }
                />
              </div>
            </div>

            {/* FILTRO */}
            <div className="mapa-filter">
              <label htmlFor="filtroServico">
                Serviço
              </label>

              <div className="mapa-filter__select">
                <SlidersHorizontal size={18} />

                <select
                  id="filtroServico"
                  aria-label="Filtrar por serviço"
                  value={filtroServico}
                  onChange={(event) =>
                    setFiltroServico(event.target.value)
                  }
                >
                  <option value="">
                    Todos os serviços
                  </option>

                  <option value="Banho">
                    Banho
                  </option>

                  <option value="Tosa">
                    Tosa
                  </option>

                  <option value="Banho + Tosa">
                    Banho + Tosa
                  </option>

                  <option value="Higiene">
                    Higiene
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* INFORMACAO DOS RESULTADOS */}
        <div className="mapa-results__header">
          <div>
            <span className="mapa-results__count">
              {petshopsVisiveis.length}
            </span>

            <span>
              {petshopsVisiveis.length === 1
                ? ' Pet Shop encontrado'
                : ' Pet Shops encontrados'}
            </span>
          </div>

          {filtrosAtivos && (
            <button
              type="button"
              className="mapa-clear"
              onClick={limparFiltros}
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* LISTAGEM */}
        {petshopsVisiveis.length > 0 ? (
          <div className="grid mapa-grid">
            {petshopsVisiveis.map((petShop) => (
              <PetShopCard
                key={petShop.id}
                petShop={petShop}
                onSelecionar={selecionarPetShop}
              />
            ))}
          </div>
        ) : (
          <div className="mapa-empty">
            <EmptyState
              titulo="Nenhum Pet Shop encontrado"
              mensagem="Tente outro nome ou escolha outro serviço."
            />

            <button
              type="button"
              className="button secondary"
              onClick={limparFiltros}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

    </section>
  );
}

export default Mapa;
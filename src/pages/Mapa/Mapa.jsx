import { useState, useEffect } from 'react';
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
import { buscarPetShops } from '../../services/petshopService.js';
import MapaReal from '../../components/MapaReal/MapaReal.jsx';



/*
=================================================
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: Mapa.jsx

RESPONSAVEL: LENO
NIVEL: DIFICIL

REQUISITO DA AV2:
Seções 7.2, 8 e 9 do PDF: consumir dados de uma API aprovada
usando fetch concentrado em services, exibir
loading/sucesso/vazio/erro, permitir tentar novamente apos falha
recuperavel e manter contingencia local.

OBJETIVO:
Listar Pet Shops e preparar a troca dos dados locais por dados
externos sem quebrar o fluxo da AV1.

O QUE JA ESTA PRONTO:
A AV1 possui dados locais em petshops.json, busca por nome, filtro
por servico, lista vazia, selecao de Pet Shop e navegacao para
Agendamento.

O QUE FALTA FAZER:
1. Criar service para buscar Pet Shops somente apos API aprovada.
2. Centralizar a URL-base da API.
3. Tratar loading, erro, lista vazia e retry.
4. Validar o formato dos dados recebidos.
5. Manter petshops.json como contingencia se o professor permitir.

ONDE MODIFICAR:
No import dos dados, nos estados do componente e no trecho que monta
petshopsVisiveis.

ANTES DE COMEÇAR:
Estude useEffect, fetch, try/catch, HTTP status e renderizacao
condicional.

DICA:
Nao chame fetch direto nesta pagina. Crie a funcao na pasta
services e importe apenas a funcao pronta aqui.

COMO TESTAR:
1. API funcionando: lista deve aparecer.
2. API sem dados: EmptyState deve aparecer.
3. API fora do ar: mensagem de erro e botao tentar novamente.

CUIDADOS:
Nao invente endpoint e nao remova o JSON local antes de confirmar
a estrategia de contingencia.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

// AV2 - RESPONSAVEL: LENO
// NIVEL: DIFICIL
// TODO: Substituir este import direto do JSON por uma funcao de service
// apenas depois que a API de Pet Shops for aprovada pelo professor.
//
// DICA: o service deve esconder fetch, URL-base e tratamento de status HTTP.
// TESTE: comparar dados remotos com os campos usados pelo PetShopCard.

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
  const [listaPetshops, setListaPetshops] = useState(petshops);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(0);
  const [usandoFallback, setUsandoFallback] = useState(false);



  useEffect(() => {
    let ativo = true;

    async function carregarPetShops() {
      setLoading(true);
      setError(null);

      try {
        const dados = await buscarPetShops();

        if (!ativo) return;

        setListaPetshops(dados);
        setUsandoFallback(false);
      } catch (erro) {
        if (!ativo) return;

        console.error("Erro ao buscar Pet Shops:", erro);

        setError("Não foi possível consultar os Pet Shops online.");
        setListaPetshops(petshops);
        setUsandoFallback(true);
      } finally {
        if (ativo) {
          setLoading(false);
        }
      }
    }

    carregarPetShops();

    return () => {
      ativo = false;
    };
  }, [retry]);

  // AV2 - RESPONSAVEL: LENO
  // NIVEL: DIFICIL
  // TODO: Criar estados para dados remotos, loading, erro e retry.
  //
  // DICA: mantenha a busca e o filtro funcionando em cima da lista final,
  // seja ela vinda da API ou do JSON de contingencia.
  // TESTE: carregar, falhar, tentar novamente e limpar filtros.

  const navigate = useNavigate();

  const petshopsVisiveis = listaPetshops.filter((petShop) => {
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

    // AV2 - RESPONSAVEL: LENO
    // NIVEL: DIFICIL
    // TODO: Quando houver API, decidir se sera salvo o objeto completo
    // ou apenas o id do Pet Shop selecionado para buscar detalhes depois.
    //
    // DICA: nao salve dados sensiveis no localStorage.
    // TESTE: atualizar a pagina de agendamento e verificar se a escolha continua valida.
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


      {/* MAPA REAL - AV2 */}
      <MapaReal
        petshops={petshopsVisiveis}
        onSelecionar={selecionarPetShop}
      />

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

        {loading && (
          <p role="status">Carregando Pet Shops...</p>
        )}

        {error && (
          <div role="alert">
            <p>{error}</p>

            {usandoFallback && (
              <p>Exibindo estabelecimentos demonstrativos.</p>
            )}

            <button
              type="button"
              className="button secondary"
              onClick={() => setRetry((valor) => valor + 1)}
              disabled={loading}
            >
              Tentar novamente
            </button>
          </div>
        )}


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

          {filtrosAtivos && petshopsVisiveis.length > 0 && (
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

import { useState } from 'react';
/*
=================================================
COMPONENTE: PetForm
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Preparar o cadastro visual do pet.

O QUE JA ESTA PRONTO:
Campos solicitados para nome, especie, raca, idade, porte e observacoes.

O QUE FALTA:
Controlar campos, validar e montar o objeto pet.

CONCEITOS:
useState, eventos, formulario controlado, objeto e localStorage.
=================================================
*/

/*
=================================================
GUIA PETNEAR - FORMULARIO DO PET

RESPONSAVEL: ANITA
NIVEL: MEDIO

REQUISITO DA AV1:
O cadastro do pet pode ser uma das acoes que alteram estado e
tambem pode ser o dado relevante persistido localmente.

ANTES DE COMEÇAR:
Identifique quais campos realmente representam um pet e quais
precisam ser obrigatorios para a AV1.

COMECE POR:
Trabalhe primeiro nos campos obrigatorios. Depois acrescente os
campos complementares.

DEPOIS:
Quando os valores estiverem sendo acompanhados corretamente,
pense em como reunir as informacoes em um unico cadastro.

QUANDO ISSO FUNCIONAR:
Somente depois estude persistencia local. Antes disso, confirme
que os dados digitados estao corretos.

DICA:
Persistir dados errados apenas guarda o problema por mais tempo.
Teste formulario e validacao antes de pensar em armazenamento.

CONCEITOS PARA ESTUDAR:
- estado
- formulario controlado
- validacao
- objeto de dados
- persistencia local

COMO TESTAR:
Cadastre um pet, tente deixar campos obrigatorios vazios e
confira se a tela orienta o usuario.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function PetForm() {
  const [nomePet, setNomePet] = useState('');
  const [especiePet, setEspeciePet] = useState('');
  const [racaPet, setRacaPet] = useState('');
  const [idadePet, setIdadePet] = useState('');
  const [portePet, setPortePet] = useState('');
  const [observacoesPet, setObservacoesPet] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSucesso(false); // Resetar o estado de sucesso antes de validar
    if (!nomePet || !especiePet || !racaPet || !idadePet || !portePet) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const pet = {
      nome: nomePet,
      especie: especiePet,
      raca: racaPet,
      idade: idadePet,
      porte: portePet,
      observacoes: observacoesPet
    };

    localStorage.setItem('petCadastrado', JSON.stringify(pet));

    setSucesso(true);
  }

  return (



    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="nomePet">Nome do pet</label>
        <input
          id="nomePet"
          name="nomePet"
          type="text"
          placeholder="Ex.: Mel"
          value={nomePet}
          onChange={(event) => setNomePet(event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="especiePet">Especie</label>
        <select
          id="especiePet"
          name="especiePet"
          value={especiePet}
          onChange={(event) => setEspeciePet(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="racaPet">Raca</label>
        <input
          id="racaPet"
          name="racaPet"
          type="text"
          placeholder="Ex.: Shih-tzu"
          value={racaPet}
          onChange={(event) => setRacaPet(event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="idadePet">Idade</label>
        <input
          id="idadePet"
          name="idadePet"
          type="text"
          placeholder="Ex.: 2 anos"
          value={idadePet}
          onChange={(event) => setIdadePet(event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="portePet">Porte</label>
        <select id="portePet"
          name="portePet"
          value={portePet}
          onChange={(event) => setPortePet(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Pequeno">Pequeno</option>
          <option value="Medio">Medio</option>
          <option value="Grande">Grande</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="observacoesPet">Observacoes</label>
        <textarea
          id="observacoesPet"
          name="observacoesPet"
          rows="4"
          placeholder="Cuidados, alergias ou comportamento"
          value={observacoesPet}
          onChange={(event) => setObservacoesPet(event.target.value)}
        />
      </div>

      <button className="button" type="submit">
        Continuar
      </button>

      {sucesso && (
        <p>Pet cadastrado com sucesso!</p>
      )}

      {/* =================================================
      TODO AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 2

      OBJETIVO:
      Cadastrar os dados do pet e preparar persistencia local.

      O QUE VOCE DEVE FAZER:
      1. Criar estado para os campos.
      2. Ligar os inputs ao estado.
      3. Validar os campos obrigatorios.
      4. Criar um objeto com os dados do pet.
      5. Atualizar o estado da pagina Cadastros.
      6. Estudar localStorage.setItem() para salvar o pet.
      7. Estudar localStorage.getItem() e JSON.parse() para recuperar depois.

      CONCEITOS:
      useState
      onChange
      onSubmit
      eventos
      formulario controlado
      localStorage

      COMO TESTAR:
      Preencha os campos e clique em Continuar.

      RESULTADO ESPERADO:
      Os dados validos devem permitir avancar para localizacao.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}
    </form>
  );
}

export default PetForm;

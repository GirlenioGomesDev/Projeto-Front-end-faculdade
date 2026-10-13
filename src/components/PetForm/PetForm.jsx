import { useState } from 'react';
/*
=================================================
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: PetForm.jsx

RESPONSAVEL: ANITA
NIVEL: MEDIO

REQUISITO DA AV2:
Seções 7.2 e 9 do PDF: validar dados enviados e recebidos,
integrar formularios com services e decidir o que pode ser
persistido localmente como contingencia.

OBJETIVO:
Orientar o cadastro do pet para funcionar com API sem perder a
contingencia local da AV1.

O QUE JA ESTA PRONTO:
Formulario controlado, validacao simples de obrigatorios, montagem
do objeto pet, callback para a pagina e persistencia em localStorage.

O QUE FALTA FAZER:
1. Trocar alert por mensagens visuais consistentes.
2. Integrar com petService somente depois da API aprovada.
3. Tratar loading, sucesso, vazio e erro.
4. Validar o retorno da API antes de avancar.

ONDE MODIFICAR:
Na funcao handleSubmit e no ponto onde o pet e salvo.

ANTES DE COMECAR:
Estude useState, validacao, JSON.stringify, services e estados de
requisicao.

DICA:
Persistencia local pode continuar como plano B, mas a API deve ser
a fonte principal quando a AV2 for implementada.

COMO TESTAR:
1. Envie campos vazios.
2. Cadastre pet valido.
3. Atualize a pagina e confirme a contingencia local.
4. Simule erro do service.

CUIDADOS:
Nao duplique o mesmo pet em varios lugares sem necessidade.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

/*
=================================================
COMPONENTE: PetForm
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Controlar o cadastro do pet e enviar os dados para a pagina
Cadastros.

O QUE JA ESTA PRONTO:
Campos controlados, validacao simples, objeto do pet, callback para
avancar etapa e persistencia local.

O QUE FALTA:
Trocar alert por mensagem visual e revisar a persistencia quando a
AV2 definir a API.

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

function PetForm({ onContinuar}) {
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

    // AV2 - RESPONSAVEL: ANITA
    // NIVEL: MEDIO
    // TODO: Substituir alert por estado de erro exibido na tela.
    //
    // DICA: mensagens visuais ajudam Bianka a padronizar o layout.
    // TESTE: campos vazios devem mostrar erro sem recarregar a pagina.
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
    
      onContinuar(pet);

    // AV2 - RESPONSAVEL: ANITA
    // NIVEL: MEDIO
    // TODO: Quando petService existir, salvar na API antes de confirmar.
    //
    // DICA: use localStorage como contingencia ou cache simples, nao como
    // substituto definitivo da API.
    // TESTE: cadastre, atualize a pagina e confira se a recuperacao continua clara.
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
      CHECKLIST AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 2

      OBJETIVO:
      Conferir se o cadastro do pet e a persistencia local funcionam.

      O QUE VOCE DEVE CONFERIR:
      1. Estados dos campos.
      2. Inputs ligados ao estado.
      3. Validacao dos campos obrigatorios.
      4. Objeto com os dados do pet.
      5. Atualizacao do estado da pagina Cadastros.
      6. Salvamento com localStorage.setItem().
      7. Recuperacao posterior com localStorage.getItem() e JSON.parse().

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

      SO MARQUE COMO CONCLUIDO APOS TESTAR NO NAVEGADOR.
      ================================================= */}
    </form>
  );
}

export default PetForm;

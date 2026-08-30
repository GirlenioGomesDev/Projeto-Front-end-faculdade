import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*
=================================================
COMPONENTE: LocationForm
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Preparar a etapa de localizacao manual.

O QUE JA ESTA PRONTO:
Campos CEP, bairro e cidade.

O QUE FALTA:
Controlar campos, validar e navegar para /mapa.

CONCEITOS:
useState, onChange, onSubmit, useNavigate e validacao.
=================================================
*/

/*
=================================================
GUIA PETNEAR - LOCALIZACAO

RESPONSAVEL: ANITA
NIVEL: MEDIO

REQUISITO DA AV1:
Esta etapa ajuda o fluxo a chegar ao mapa sem depender de uma
API real de CEP.

ANTES DE COMEÇAR:
Lembre que a AV1 trabalha com dados locais e preenchimento
manual. Nao implemente consulta externa.

COMECE POR:
Verifique quais campos sao necessarios para o usuario informar
onde esta procurando Pet Shops.

DEPOIS:
Pense nas validacoes e no momento certo de permitir avancar para
o mapa.

QUANDO ISSO FUNCIONAR:
Teste o caminho completo: cadastro, localizacao e abertura do
mapa simulado.

DICA:
Se algum dia esta parte usar API de CEP, isso fica para AV2.
Na AV1, o objetivo e aprender estado, validacao e navegacao.

CONCEITOS PARA ESTUDAR:
- estado
- eventos
- validacao
- navegacao entre rotas

COMO TESTAR:
Tente continuar sem preencher e depois com os dados manuais.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function LocationForm() {
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [errocep, setErrocep] = useState("");
  const [errobairro, setErrobairro] = useState("");
  const [errocidade, setErrocidade] = useState("");

  const navigate = useNavigate();
  return (
    <form
      className="form-grid"
      onSubmit={(evento) => {
        evento.preventDefault();

        if (cep === "") {
          setErrocep("Informe seu CEP.");
        }
        else {
          setErrocep("");


          if (bairro === "") {
            setErrobairro("Informe seu BAIRRO.");
          }
          else {
            setErrobairro("");


          if (cidade === "") {
            setErrocidade("Informe sua CIDADE.");
          }
          else {
            setErrocidade("");

            navigate("/mapa")
          }

          }
        }

      }}
    >
      {errocep && (errocep)}
      {errobairro && (errobairro)}
      {errocidade && (errocidade)}
      <div className="field">
        <label htmlFor="cep">CEP</label>
        <input
          id="cep"
          name="cep"
          type="text"
          placeholder="00000-000"
          onChange={(evento) => {
            setCep(evento.target.value);
          }}
          value={cep}
        />

      </div>

      <div className="field">
        <label htmlFor="bairro">Bairro</label>
        <input
          id="bairro"
          name="bairro"
          type="text"
          placeholder="Informe manualmente"
          onChange={(evento) => {
            setBairro(evento.target.value);
          }}
          value={bairro}
        />
      </div>

      <div className="field">
        <label htmlFor="cidade">Cidade</label>
        <input
          id="cidade"
          name="cidade"
          type="text"
          placeholder="Informe manualmente"
          onChange={(evento) => {
            setCidade(evento.target.value);
          }}
          value={cidade}
        />
      </div>

      <button className="button" type="submit">
        Encontrar Pet Shops
      </button>

      {/* =================================================
      TODO AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 2

      OBJETIVO:
      Validar localizacao e encaminhar para o mapa simulado.

      O QUE VOCE DEVE FAZER:
      1. Criar estados para CEP, bairro e cidade.
      2. Validar campos obrigatorios.
      3. Mostrar "Informe seu CEP." quando necessario.
      4. Usar useNavigate para ir para /mapa.

      CONCEITOS:
      useState
      eventos
      validacao
      useNavigate

      COMO TESTAR:
      Tente continuar sem CEP e depois preenchendo os campos.

      RESULTADO ESPERADO:
      Com dados validos, o fluxo deve abrir /mapa.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}

      {/* AV2 - IMPLEMENTACAO FUTURA
      O CEP podera futuramente consultar uma API e preencher bairro/cidade
      automaticamente. Nao consumir API de CEP na AV1. */}
    </form>
  );
}

export default LocationForm;

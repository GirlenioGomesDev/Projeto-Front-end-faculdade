import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*
=================================================
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: LocationForm.jsx

RESPONSAVEL: ANITA
NIVEL: MEDIO

REQUISITO DA AV2:
Seções 7.2, 7.3 e 8 do PDF: integrar formularios com services,
validar dados e consumir API aprovada sem inventar fornecedor ou
endpoint.

OBJETIVO:
Preparar a localizacao para uma possivel consulta externa, mantendo
o preenchimento manual enquanto a API nao for aprovada.

O QUE JA ESTA PRONTO:
Campos controlados de CEP, bairro e cidade, validacao simples e
navegacao para /mapa.

O QUE FALTA FAZER:
1. Confirmar se a API de CEP/localizacao foi aprovada.
2. Criar service especifico se houver consulta externa.
3. Tratar loading, erro e botao tentar novamente.
4. Permitir preenchimento manual quando a API falhar.

ONDE MODIFICAR:
No onSubmit e nos estados de erro do formulario.

ANTES DE COMECAR:
Estude useNavigate, fetch via service, tratamento de erro e
fallback manual.

DICA:
API de CEP so entra se estiver no escopo aprovado. O usuario ainda
deve conseguir informar bairro/cidade manualmente.

COMO TESTAR:
1. Envie vazio.
2. Preencha manualmente e avance para /mapa.
3. Se houver API, teste sucesso, falha e retry.

CUIDADOS:
Nao bloqueie o fluxo inteiro se a API de CEP estiver fora do ar.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

/*
=================================================
COMPONENTE: LocationForm
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Controlar a etapa de localizacao manual e encaminhar para o mapa.

O QUE JA ESTA PRONTO:
Campos controlados de CEP, bairro e cidade, validacao simples e
navegacao para /mapa.

O QUE FALTA:
Melhorar mensagens visuais e planejar API de CEP somente se ela for
aprovada para a AV2.

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

        // AV2 - RESPONSAVEL: ANITA
        // NIVEL: MEDIO
        // TODO: Se houver API aprovada, validar CEP via service antes
        // de navegar para o mapa.
        //
        // DICA: mantenha a opcao manual para quando a consulta falhar.
        // TESTE: CEP invalido, API indisponivel e preenchimento manual.
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
      CHECKLIST AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 2

      OBJETIVO:
      Conferir se a localizacao valida encaminha para o mapa simulado.

      O QUE VOCE DEVE CONFERIR:
      1. Estados para CEP, bairro e cidade.
      2. Validacao dos campos obrigatorios.
      3. Mensagem "Informe seu CEP." quando necessario.
      4. useNavigate abrindo /mapa.

      CONCEITOS:
      useState
      eventos
      validacao
      useNavigate

      COMO TESTAR:
      Tente continuar sem CEP e depois preenchendo os campos.

      RESULTADO ESPERADO:
      Com dados validos, o fluxo deve abrir /mapa.

      SO MARQUE COMO CONCLUIDO APOS TESTAR NO NAVEGADOR.
      ================================================= */}

      {/* AV2 - IMPLEMENTACAO FUTURA
      O CEP podera futuramente consultar uma API e preencher bairro/cidade
      automaticamente. Nao consumir API de CEP na AV1. */}
    </form>
  );
}

export default LocationForm;

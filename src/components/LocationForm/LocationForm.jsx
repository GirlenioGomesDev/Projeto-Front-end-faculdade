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

function LocationForm() {
  return (
    <form className="form-grid">
      <div className="field">
        <label htmlFor="cep">CEP</label>
        <input id="cep" name="cep" type="text" placeholder="00000-000" />
      </div>

      <div className="field">
        <label htmlFor="bairro">Bairro</label>
        <input id="bairro" name="bairro" type="text" placeholder="Informe manualmente" />
      </div>

      <div className="field">
        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" name="cidade" type="text" placeholder="Informe manualmente" />
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

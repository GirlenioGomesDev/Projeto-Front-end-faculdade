/*
=================================================
GUIA PETNEAR - DESENVOLVIMENTO AV2

ARQUIVO: UserForm.jsx

RESPONSAVEL: ANITA
NIVEL: MEDIO

REQUISITO DA AV2:
Seção 7.4 do PDF: implementar autenticacao com login, feedback,
sessao, restauracao apos refresh e logout, sem guardar senhas.

OBJETIVO:
Orientar a evolucao do cadastro/login do tutor sem colocar regra de
autenticacao diretamente no componente visual.

O QUE JA ESTA PRONTO:
A AV1 possui formulario controlado com campos de tutor, validacao
simples para nome/e-mail/cidade e callback para avancar etapa.

O QUE FALTA FAZER:
1. Separar cadastro de tutor e login, se a API aprovada exigir.
2. Chamar uma funcao de authService em vez de fetch direto.
3. Tratar loading, sucesso e erro de autenticacao.
4. Nunca salvar senha no localStorage.
5. Validar os dados antes de enviar para a API.

ONDE MODIFICAR:
No onSubmit do formulario e nos estados relacionados a erro/sucesso.

ANTES DE COMECAR:
Estude formulario controlado, preventDefault, promises e tratamento
de erros HTTP.

DICA:
Se a API devolver token ou usuario, quem deve organizar isso e o
service/auth, nao o formulario sozinho.

COMO TESTAR:
1. Envie vazio.
2. Envie com e-mail invalido.
3. Simule login/cadastro com sucesso, 401 e 403.

CUIDADOS:
Nao persista senha e nao invente endpoint de autenticacao.

NAO ESCREVA A SOLUCAO AUTOMATICAMENTE.
=================================================
*/

/*
=================================================
COMPONENTE: UserForm
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Controlar o cadastro inicial do tutor e enviar dados validados para
a pagina Cadastros.

O QUE JA ESTA PRONTO:
Campos controlados, validacao simples de nome, e-mail e cidade,
mensagens condicionais e callback para avancar etapa.

O QUE FALTA:
Revisar mensagens visuais, melhorar validacoes e separar o login
real quando a AV2 for implementada.

CONCEITOS:
useState, value, onChange, onSubmit, preventDefault e validacao.
=================================================
*/

/*
=================================================
GUIA PETNEAR - FORMULARIO DO TUTOR

RESPONSAVEL: ANITA
NIVEL: MEDIO

REQUISITO DA AV1:
Este componente pode ajudar no requisito de formulario controlado
com validacao de campos obrigatorios.

ANTES DE COMEÇAR:
Leia todos os campos e decida quais sao essenciais para um
cadastro minimo do tutor.

COMECE POR:
Escolha apenas um campo para entender como a tela acompanha o
valor digitado pelo usuario.

DEPOIS:
Quando um campo estiver claro, aplique o mesmo raciocinio aos
demais campos importantes.

QUANDO ISSO FUNCIONAR:
Pense no envio do formulario e nas mensagens de validacao. A
mensagem deve aparecer apenas quando fizer sentido.

DICA:
Nao misture formulario, validacao e armazenamento ao mesmo tempo.
Cada etapa fica mais facil quando testada separadamente.

CONCEITOS PARA ESTUDAR:
- estado
- eventos
- formulario controlado
- envio de formulario
- validacao

COMO TESTAR:
Digite valores diferentes, tente enviar vazio e observe se a
interface responde de forma compreensivel.

NAO ESCREVA A SOLUCAO.
=================================================
*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm ({ onContinuar}) {
  const navigate = useNavigate();

  const [nomeTutor, setnomeTutor] = useState("");
  const [emailTutor, setemailTutor] = useState("");

  // AV2 - RESPONSAVEL: ANITA COM APOIO DE LENO
  // NIVEL: MEDIO
  // TODO: Usar este campo apenas para envio seguro ao authService.
  //
  // DICA: senha nao deve ser guardada em localStorage nem reaproveitada
  // para montar sessao manualmente.
  // TESTE: depois do cadastro/login, atualize a pagina e confirme que
  // a senha nao ficou salva no navegador.
  const [senhaTutor, setsenhaTutor] = useState("");

  const [telefoneTutor, settelefoneTutor] = useState("");
  const [bairroTutor, setbairroTutor] = useState("");
  const [cidadeTutor, setCidadeTutor] = useState("");
  const [erronomeTutor, setErronometutor] = useState("");
  const [erroemailTutor, setErroemailtutor] = useState("");
  const [errocidadeTutor, setErrocidadetutor] = useState("");

  return (
    <form className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();

        if (nomeTutor === "") {

          setErronometutor("Informe seu NOME.");
        }
        else {
          setErronometutor("");
        }


        if (emailTutor === "") {

          setErroemailtutor("Informe seu EMAIL.");
        }
        else {
          setErroemailtutor("");
        }


        if (cidadeTutor === "") {

          setErrocidadetutor("Informe sua CIDADE.");
        }
        else {
          setErrocidadetutor("");
        }
        if (
          nomeTutor !== "" &&
          emailTutor !== "" &&
          cidadeTutor !== ""
        ) {
          // AV2 - RESPONSAVEL: ANITA
          // NIVEL: MEDIO
          // TODO: Antes de avancar, chamar o service aprovado para cadastro
          // ou login e tratar loading, erro e sucesso.
          //
          // DICA: deixe o service cuidar do fetch e dos codigos HTTP.
          // TESTE: simule resposta 401/403 e confira a mensagem ao usuario.
          const dadosTutor = {
           nome: nomeTutor,
           email: emailTutor,
           senha: senhaTutor,
           telefone: telefoneTutor,
           bairro: bairroTutor,
           cidade: cidadeTutor
          };
          onContinuar(dadosTutor);
        }
      }}

    >
      <div className="field">
        <label htmlFor="nomeTutor">Nome</label>
        <input
          id="nomeTutor"
          name="nomeTutor"
          type="text"
          placeholder="Seu nome"
          value={nomeTutor}
          onChange={(e) => {
            setnomeTutor(e.target.value);
          }}
        />
        {erronomeTutor && <span>{erronomeTutor}</span>}
      </div>

      <div className="field">
        <label htmlFor="emailTutor">E-mail</label>
        <input
          id="emailTutor"
          name="emailTutor"
          type="email"
          placeholder="email@exemplo.com"
          value={emailTutor}
          onChange={(e) => {
            setemailTutor(e.target.value);
          }}
        />
        {erroemailTutor && <span>{erroemailTutor}</span>}
      </div>

      <div className="field">
        <label htmlFor="senhaTutor">Senha</label>
        <input
          id="senhaTutor"
          name="senhaTutor"
          type="password"
          placeholder="Senha inicial"
          value={senhaTutor}
          onChange={(e) => {
            setsenhaTutor(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label htmlFor="telefoneTutor">Telefone</label>
        <input
          id="telefoneTutor"
          name="telefoneTutor"
          type="tel"
          placeholder="(00) 00000-0000"
          value={telefoneTutor}
          onChange={(e) => {
            settelefoneTutor(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label htmlFor="bairroTutor">Bairro</label>
        <input
          id="bairroTutor"
          name="bairroTutor"
          type="text"
          placeholder="Seu bairro"
          value={bairroTutor}
          onChange={(e) => {
            setbairroTutor(e.target.value);
          }}

        />
      </div>

      <div className="field">
        <label htmlFor="cidadeTutor">Cidade</label>
        <input
          id="cidadeTutor"
          name="cidadeTutor"
          type="text"
          placeholder="Sua cidade"
          value={cidadeTutor}
          onChange={(e) => {
            setCidadeTutor(e.target.value);
          }}
        />

        {errocidadeTutor && <span>{errocidadeTutor}</span>}
      </div>

      <button className="button" type="submit">
        Continuar
      </button>

      {/* =================================================
      CHECKLIST AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 2

      OBJETIVO:
      Conferir se o formulario controlado do tutor continua claro.

      O QUE VOCE DEVE CONFERIR:
      1. Campos ligados com value e onChange.
      2. onSubmit com preventDefault().
      3. Validacao de nome, e-mail e cidade.
      4. Mensagens como "Informe seu nome.".
      5. Avanco para a etapa do pet apenas com dados validos.

      CONCEITOS:
      useState
      onChange
      onSubmit
      formulario controlado
      renderizacao condicional

      COMO TESTAR:
      Envie o formulario vazio e confirme se a mensagem aparece.

      RESULTADO ESPERADO:
      Dados validos devem permitir avancar para o cadastro do pet.

      SO MARQUE COMO CONCLUIDO APOS TESTAR NO NAVEGADOR.
      ================================================= */}

      {/* AV2 - FUTURO
      O login real sera implementado com autenticacao.
      Na AV1, "Ja tenho cadastro" e "Entrar" devem ser apenas simulacao visual. */}
    </form>
  );
}

export default UserForm;

/*
=================================================
COMPONENTE: UserForm
NIVEL: MEDIO
RESPONSAVEL SUGERIDO: PESSOA 2

FUNCAO:
Preparar o cadastro visual do tutor.

O QUE JA ESTA PRONTO:
Campos iniciais do formulario.

O QUE FALTA:
Controlar campos com useState, validar obrigatorios e simular avanco.

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
          onContinuar();
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
      TODO AV1
      NIVEL: MEDIO
      RESPONSAVEL SUGERIDO: PESSOA 2

      OBJETIVO:
      Criar um formulario controlado para o tutor.

      O QUE VOCE DEVE FAZER:
      1. Importar useState.
      2. Criar estados para os campos ou um objeto de formulario.
      3. Ligar cada input com value e onChange.
      4. Criar onSubmit com preventDefault().
      5. Validar nome, e-mail e cidade.
      6. Mostrar mensagens como "Informe seu nome.".

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

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}

      {/* AV2 - FUTURO
      O login real sera implementado com autenticacao.
      Na AV1, "Ja tenho cadastro" e "Entrar" devem ser apenas simulacao visual. */}
    </form>
  );
}

export default UserForm;

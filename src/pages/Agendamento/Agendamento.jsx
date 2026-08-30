import ScheduleForm from '../../components/ScheduleForm/ScheduleForm.jsx';

/*
=================================================
PAGINA: Agendamento
NIVEL: DIFICIL
RESPONSAVEL SUGERIDO: PESSOA 3 NA PARTE VISUAL, PESSOA 1 OU 2 NA LOGICA

FUNCAO:
Preparar a tela onde o usuario escolhera servico, data e horario.

O QUE JA ESTA PRONTO:
Estrutura visual com exemplo de pet, Pet Shop selecionado e formulario.

O QUE FALTA:
Ler dados reais do pet/Pet Shop, validar e confirmar o agendamento.

CONCEITOS:
useState, localStorage, validacao, renderizacao condicional e eventos.
=================================================
*/

/*
=================================================
GUIA PETNEAR - AGENDAMENTO

RESPONSAVEIS:
BIANKA - LEVE, estrutura visual
LENO - DIFICIL, logica principal
ANITA - MEDIO, validacoes e persistencia quando necessario

REQUISITO DA AV1:
Esta pagina ajuda a cumprir a operacao de agendamento, mensagem
de resultado de acao e alteracao de estado.

ANTES DE COMEÇAR:
Confirme se o fluxo anterior ja permite chegar ate aqui pela
navegacao. O usuario nao deve depender de digitar a rota.

COMECE POR:
Bianka deve organizar a leitura visual: Seu pet, Pet Shop
selecionado, servico, data, horario e confirmacao.

DEPOIS:
Leno deve trabalhar por partes: primeiro servico, depois data,
depois horario. Cada pequena parte precisa ser testada antes da
proxima.

QUANDO ISSO FUNCIONAR:
Anita e Leno podem pensar nas validacoes e nas mensagens que
aparecem somente quando fazem sentido.

DICA:
Nao tente resolver agendamento inteiro de uma vez. Separe a
tela em pequenas perguntas: o que o usuario escolheu, o que
falta preencher e qual retorno a interface deve mostrar.

CONCEITOS PARA ESTUDAR:
- estado
- eventos
- validacao
- renderizacao condicional
- persistencia local

COMO TESTAR:
Tente confirmar incompleto, depois preencha servico, data e
horario e observe se a resposta da tela faz sentido.

NAO ESCREVA A SOLUCAO.
=================================================
*/

function Agendamento() {
   const petShopSelecionado = JSON.parse(
    localStorage.getItem('petShopSelecionado')
   );

  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Agendamento</h1>
        <p className="page-description">
          Tela preparada para confirmar servico, data e horario. A logica sera
          implementada pela equipe durante a AV1.
        </p>
      </header>

      <div className="grid">
        <article className="card">
          <h2>Seu pet</h2>
          <p>Mel</p>
          <p>Shih-tzu</p>
          <p>Pequeno porte</p>
        </article>

        <article className="card">
          <h2>Pet Shop selecionado</h2>
           {petShopSelecionado ? ( 
            <>
          <p>{petShopSelecionado?.nome}</p>
          <p>
            {petShopSelecionado?.endereco} - {petShopSelecionado?.bairro}, {petShopSelecionado?.cidade}
          </p>
          </>
           ) : (
            <p>Nenhum Pet Shop selecionado.</p>
           )} 
        </article>

        <article className="card">
          <h2>Escolha o servico</h2>
          <ScheduleForm petShopSelecionado={petShopSelecionado} />
        </article>
      </div>

      

      {/* =================================================
      TODO AV1
      NIVEL: DIFICIL
      RESPONSAVEL SUGERIDO: PESSOA 1 OU PESSOA 2

      OBJETIVO:
      Exibir confirmacao somente depois de um agendamento valido.

      O QUE VOCE DEVE FAZER:
      1. Criar estado para controlar sucesso.
      2. Validar servico, data e horario.
      3. Montar o objeto de agendamento.
      4. Exibir dados como pet, servico, Pet Shop, data e horario.
      5. Persistir o agendamento se a equipe escolher esta estrategia.

      CONCEITOS:
      renderizacao condicional
      estado de sucesso
      validacao
      persistencia

      COMO TESTAR:
      Confirme sem preencher dados e depois preencha todos os campos.

      RESULTADO ESPERADO:
      A mensagem de sucesso deve aparecer apenas com dados validos.

      NAO IMPLEMENTE ESTA PARTE COMPLETAMENTE.
      ================================================= */}
    </section>
  );
}

export default Agendamento;

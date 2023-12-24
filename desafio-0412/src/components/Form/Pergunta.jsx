import React from 'react';
import Radio from './Radio';
import { GlobalContext } from '../Context/GlobalStorage';

const Pergunta = ({ perguntaAtual, setPerguntaAtual }) => {
  if (!perguntaAtual) return <p>Obrigado por jogar!</p>;

  const context = React.useContext(GlobalContext);

  const [usuarioRes, setUsuarioRes] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [usuarioRes]);

  const { pergunta, options } = context.perguntas.find(
    item => item.id === perguntaAtual,
  );

  function gameOver() {
    console.log('acabou o joguinho...');
    console.log(context.usuarioRespostas);
    console.log(context.respostas);
  }

  function handleClick(e) {
    e.preventDefault();

    if (!usuarioRes) {
      return setError('Escolha uma resposta!');
    }

    context.setUsuarioRespostas([...context.usuarioRespostas, usuarioRes]);
    setUsuarioRes(null);

    const perguntaAnteriorIndex = context.perguntas.findIndex(
      item => item.id === perguntaAtual,
    );
    const novaPergunta = context.perguntas[perguntaAnteriorIndex + 1];

    if (novaPergunta) {
      setPerguntaAtual(novaPergunta.id);
    } else {
      setPerguntaAtual(null);
    }
  }

  return (
    <>
      <form>
        <fieldset>
          <legend>{pergunta}</legend>
          <Radio
            options={options}
            value={usuarioRes}
            setValue={setUsuarioRes}
          />
        </fieldset>
        <button onClick={handleClick}>Próxima</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default Pergunta;

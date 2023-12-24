import React from 'react';
import { GlobalContext } from './Context/GlobalStorage';

const Resultado = ({ setPerguntaAtual }) => {
  const context = React.useContext(GlobalContext);

  if (context.usuarioRespostas.length !== context.respostas.length) return null;

  let acertos = 0;
  let erros = [];

  context.usuarioRespostas.forEach((item, index) => {
    if (item === context.respostas[index]) {
      acertos++;
    } else {
      erros.push(item);
    }
  });

  function handleErros() {
    if (erros.length > 0) {
      return (
        <>
          <p style={{ fontWeight: '700' }}>Seus erros:</p>
          <ul>
            {erros.map(erro => {
              return (
                <li key={erro} style={{ color: 'red' }}>
                  {erro}
                </li>
              );
            })}
          </ul>
        </>
      );
    } else {
      return <p style={{ color: 'green' }}>Parabéns!</p>;
    }
  }

  function handleClick() {
    context.setUsuarioRespostas([]);
    acertos = 0;
    erros = [];
    setPerguntaAtual('p1');
  }

  return (
    <>
      <p>
        Você acertou {acertos} de {context.respostas.length}!
      </p>
      {handleErros()}

      <button onClick={handleClick}>Recomeçar</button>
    </>
  );
};

export default Resultado;

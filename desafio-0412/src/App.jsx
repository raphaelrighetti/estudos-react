import React from 'react';
import Pergunta from './components/Form/Pergunta';
import GlobalStorage from './components/Context/GlobalStorage';
import Resultado from './components/Resultado';

const App = () => {
  const [perguntaAtual, setPerguntaAtual] = React.useState('p1');

  return (
    <div>
      <GlobalStorage>
        <Pergunta
          perguntaAtual={perguntaAtual}
          setPerguntaAtual={setPerguntaAtual}
        />
        <Resultado setPerguntaAtual={setPerguntaAtual} />
      </GlobalStorage>
    </div>
  );
};

export default App;

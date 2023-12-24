import React from 'react';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const respostas = perguntas.map(pergunta => {
  return pergunta.resposta;
});

export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [usuarioRespostas, setUsuarioRespostas] = React.useState([]);

  return (
    <GlobalContext.Provider
      value={{ perguntas, respostas, usuarioRespostas, setUsuarioRespostas }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;

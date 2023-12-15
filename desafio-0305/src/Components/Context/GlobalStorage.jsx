import React from 'react';

export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetchDados();
  }, []);

  async function fetchDados() {
    const url = 'https://ranekapi.origamid.dev/json/api/produto/';

    const response = await fetch(url);
    const data = await response.json();

    setDados(data);
  }

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;

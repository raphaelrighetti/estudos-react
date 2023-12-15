import React from 'react';
import useFetch from './hooks/useFetch';
import Produto from './components/Produto';

const App = () => {
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function doRequest() {
      const { response, json } = await request(url, {});

      console.log(response, json);
    }
    doRequest();
  }, [request]);

  return (
    <>
      {loading && <p>carregando...</p>}
      {error && <h1 style={{ color: 'red' }}>{error}</h1>}
      {!loading &&
        data &&
        data.map((produto, index) => {
          return <Produto key={index} produto={produto} />;
        })}
    </>
  );
};

export default App;

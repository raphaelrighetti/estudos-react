import React from 'react';
import Form from './components/Form/Form';
import User from './components/User';
import useFetch from './hooks/useFetch';

const App = () => {
  const { data, loading, error, request } = useFetch();

  return (
    <>
      <Form request={request} />
      {loading && <p>carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <User data={data} />
    </>
  );
};

export default App;

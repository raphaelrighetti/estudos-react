import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setData(null);
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();
    } catch (err) {
      setData(null);
      setError('Deu merda...');
      console.log(response);
      console.log(json);
      console.log(err);
    } finally {
      setLoading(false);
      setData(json);
    }

    return { response, json };
  }, []);

  return { data, loading, error, request };
};

export default useFetch;

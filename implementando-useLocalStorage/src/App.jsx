import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [pref, setPref] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setPref(target.innerText);
  }

  return (
    <>
      <h1>Preferência: {pref}</h1>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
    </>
  );
};

export default App;

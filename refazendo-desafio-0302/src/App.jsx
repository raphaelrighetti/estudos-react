import React from 'react';
import Produto from './Components/Produto';

const App = () => {
  const [pref, setPref] = React.useState(null);

  React.useEffect(() => {
    const localPref = window.localStorage.getItem('produto');

    if (localPref) {
      setPref(localPref);
    }
  }, []);

  function handleClick({ target }) {
    const produto = target.innerText;

    window.localStorage.setItem('produto', produto);
    setPref(produto);
  }

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <h1>Preferência: {pref}</h1>
      <Produto pref={pref} />
    </>
  );
};

export default App;

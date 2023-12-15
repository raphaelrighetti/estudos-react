import React from 'react';
import Produto from './Components/Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [preferencia, setPreferencia] = React.useState(null);

  const urlTemplate = 'https://ranekapi.origamid.dev/json/api/produto';
  const urls = [urlTemplate + '/notebook', urlTemplate + '/smartphone'];

  React.useEffect(() => {
    const pref = window.localStorage.getItem('produto');

    if (pref) {
      setPreferencia(pref);
    }
  }, []);

  React.useEffect(() => {
    if (preferencia) {
      fetchDados(`${urlTemplate}/${preferencia}`);
    } else {
      setDados(null);
    }
  }, [preferencia]);

  async function fetchDados(url) {
    const response = await fetch(url);
    const json = await response.json();

    setDados(json);
  }

  function handlePreferencia(pref) {
    window.localStorage.setItem('produto', pref);
    setPreferencia(pref);
  }

  function handleClick({ target }) {
    const url = target.value;
    const textoBtn = target.innerText;

    handlePreferencia(textoBtn);
  }

  return (
    <div>
      {urls.map(url => {
        const regex = /[\w]+$/;
        const textoBtn = regex.exec(url)[0];

        return (
          <button key={textoBtn} value={url} onClick={handleClick}>
            {textoBtn}
          </button>
        );
      })}
      <h1>Preferência: {preferencia}</h1>
      <Produto {...dados} />
    </div>
  );
};

export default App;

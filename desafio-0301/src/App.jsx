import Produto from './Components/Produto';
import { capitalize } from './util/util';
import React from 'react';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [carregando, setCarregando] = React.useState(null);
  const [dados, setDados] = React.useState(null);

  const urlTemplate = 'https://ranekapi.origamid.dev/json/api/produto';
  const urls = [
    urlTemplate + '/tablet',
    urlTemplate + '/smartphone',
    urlTemplate + '/notebook',
  ];

  async function fetchData(url) {
    setCarregando(true);

    const response = await fetch(url);
    const json = await response.json();

    setDados(json);
    setCarregando(false);
  }

  function handleClick(e) {
    const url = e.target.value;

    fetchData(url);
  }

  return (
    <>
      {urls.map(url => {
        const regex = /[\w]+$/;
        const textoBtn = regex.exec(url)[0];

        return (
          <button key={url} value={url} onClick={handleClick}>
            {capitalize(textoBtn)}
          </button>
        );
      })}
      <Produto carregando={carregando} dados={dados} />
    </>
  );
};

export default App;

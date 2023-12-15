import React from 'react';

const Produto = ({ pref }) => {
  const [dados, setDados] = React.useState(null);

  const urlTemplate = 'https://ranekapi.origamid.dev/json/api/produto/';

  React.useEffect(() => {
    if (pref) {
      fetch(urlTemplate + pref)
        .then(response => response.json())
        .then(data => setDados(data));
    }
  }, [pref]);

  if (!dados) {
    return null;
  }

  return (
    <div>
      <h2>{dados.nome}</h2>
      <p>Preço: R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produto;

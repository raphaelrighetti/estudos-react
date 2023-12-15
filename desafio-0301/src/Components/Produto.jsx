import React from 'react';

const Produto = ({ carregando, dados }) => {
  if (carregando) {
    return <p>carregando...</p>;
  }

  if (dados) {
    return (
      <>
        <h1>{dados.nome}</h1>
        <p>Preço: R$ {dados.preco}</p>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      </>
    );
  } else {
    return null;
  }
};

export default Produto;

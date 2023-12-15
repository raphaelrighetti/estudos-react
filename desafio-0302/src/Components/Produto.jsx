import React from 'react';

const Produto = ({ nome, preco, fotos }) => {
  if (nome) {
    return (
      <>
        <h2>{nome}</h2>
        <p>Preço: R$ {preco}</p>
        <img src={fotos[0].src} alt={fotos[0].titulo} />
      </>
    );
  } else {
    return null;
  }
};

export default Produto;

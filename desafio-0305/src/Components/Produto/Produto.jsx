import React from 'react';

const Produto = ({ produto }) => {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>Preço: R$ {produto.nome}</p>
      <img
        style={{ maxWidth: '150px' }}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
      />
    </div>
  );
};

export default Produto;

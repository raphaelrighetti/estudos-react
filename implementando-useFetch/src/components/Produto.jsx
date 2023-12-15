import React from 'react';

const Produto = ({ produto }) => {
  if (!produto) return null;

  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <img
        style={{ maxWidth: '150px' }}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
      />
    </div>
  );
};

export default Produto;

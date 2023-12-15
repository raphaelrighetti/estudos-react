import React from 'react';
import Produto from './Produto';
import { GlobalContext } from '../Context/GlobalStorage';

const Produtos = () => {
  const { dados } = React.useContext(GlobalContext);

  if (!dados) {
    return null;
  }

  return (
    <>
      {dados.map((dado, index) => {
        return <Produto key={index} produto={dado} />;
      })}
    </>
  );
};

export default Produtos;

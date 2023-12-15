import React from 'react';
import SectionTitle from '../Generic/SectionTitle';
import Produto from './Produto';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <>
      <SectionTitle color="green">Produtos</SectionTitle>
      {produtos.map(produto => {
        return <Produto key={produto.nome} {...produto} />;
      })}
    </>
  );
};

export default Produtos;

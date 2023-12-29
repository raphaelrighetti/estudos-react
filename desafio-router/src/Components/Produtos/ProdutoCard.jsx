import React from 'react';
import styles from './ProdutoCard.module.css';
import { Link } from 'react-router-dom';
import ProdutoImg from './ProdutoImg';

const ProdutoCard = ({ produto }) => {
  if (!produto) return null;

  return (
    <Link className={styles.link} to={produto.id}>
      <li className={styles.produto}>
        <ProdutoImg src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        <h2>{produto.nome}</h2>
      </li>
    </Link>
  );
};

export default ProdutoCard;

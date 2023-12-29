import React from 'react';
import styles from './ProdutoImg.module.css';

const ProdutoImg = ({ src, alt }) => {
  return <img className={styles.img} src={src} alt={alt} />;
};

export default ProdutoImg;

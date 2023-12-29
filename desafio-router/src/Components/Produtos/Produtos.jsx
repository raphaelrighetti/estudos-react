import React from 'react';
import styles from './Produtos.module.css';
import useFetch from '../../hooks/useFetch';
import ProdutoCard from './ProdutoCard';

const Produtos = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, [request]);

  if (error) return <p style={{ color: 'red' }}>Deu merda...</p>;
  if (loading) return <p>carregando...</p>;

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.produtosList}>
          {data &&
            data.map(produto => {
              return <ProdutoCard key={produto.id} produto={produto} />;
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Produtos;

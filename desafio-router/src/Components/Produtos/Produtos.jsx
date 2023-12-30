import React from 'react';
import styles from './Produtos.module.css';
import useFetch from '../../hooks/useFetch';
import ProdutoCard from './ProdutoCard';
import Head from '../Head/Head';

const Produtos = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, [request]);

  if (error) {
    return (
      <>
        <Head title="Produtos" />
        <p style={{ color: 'red' }}>Deu merda...</p>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <Head title="Produtos" />
        <p>carregando...</p>
      </>
    );
  }

  return (
    <>
      <Head title="Produtos" />
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
    </>
  );
};

export default Produtos;

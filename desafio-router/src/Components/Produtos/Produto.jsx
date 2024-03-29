import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import useFetch from '../../hooks/useFetch';
import ProdutoImg from './ProdutoImg';
import Head from '../Head/Head';

const Produto = () => {
  const params = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { response, json } = request(
      'https://ranekapi.origamid.dev/json/api/produto/' + params.id,
    );

    console.log(response, json);
  }, [request]);

  if (error) return <p style={{ color: 'red' }}>Deu merda...</p>;
  if (loading) return <p>carregando...</p>;

  if (!data) return null;

  return (
    <>
      <Head title={data.nome} />
      <div className={styles.container}>
        <div className={styles.left}>
          {data.fotos.map(foto => {
            return (
              <ProdutoImg key={foto.src} src={foto.src} alt={foto.titulo} />
            );
          })}
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>{data.nome}</h2>
          <p className={styles.preco}>R$ {data.preco}</p>
          <p>{data.descricao}</p>
        </div>
      </div>
    </>
  );
};

export default Produto;

import React from 'react';
import styles from './Contato.module.css';
import Head from '../Head/Head';

const Contato = () => {
  return (
    <>
      <Head title="Contato" />
      <div className={styles.container}>
        <h2 className={styles.title}>Entre em contato</h2>
        <ul>
          <li className={styles.item}>
            <a href="mailto:fulano@email.com">fulano@email.com</a>
          </li>
          <li className={styles.item}>(11) 91234-5678</li>
          <li className={styles.item}>Rua Daorinha</li>
        </ul>
      </div>
    </>
  );
};

export default Contato;

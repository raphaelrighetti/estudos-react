import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  function handleActiveLink(s) {
    let classeNavLink = styles.link;

    if (s.isActive) {
      classeNavLink += ' ' + styles.activeLink;
    }

    return classeNavLink;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.linksList}>
          <NavLink className={handleActiveLink} to={'/produtos'} end>
            Produtos
          </NavLink>
          <NavLink className={handleActiveLink} to={'/contato'}>
            Contato
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';

const NavigationHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/produtos" title="Produtos">
              Produtos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;

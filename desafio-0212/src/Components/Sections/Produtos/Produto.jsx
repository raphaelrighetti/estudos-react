import React from 'react';

const Produto = ({ nome, propriedades }) => {
  const divStyle = {
    minWidth: '300px',
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid',
  };

  return (
    <div style={divStyle}>
      <h2>{nome}</h2>
      <ul>
        {propriedades.map(prop => {
          return <li key={prop}>{prop}</li>;
        })}
      </ul>
    </div>
  );
};

export default Produto;

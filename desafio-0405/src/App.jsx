import React from 'react';

const App = () => {
  const [cores, setCores] = React.useState([]);

  // Otimize o código do slide anterior
  // utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter(cor => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map(cor => {
        return (
          <label key={cor} style={{ textTransform: 'capitalize' }}>
            <input
              type="checkbox"
              value={cor}
              checked={handleChecked(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        );
      })}
      <ul>
        {cores.map(cor => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;

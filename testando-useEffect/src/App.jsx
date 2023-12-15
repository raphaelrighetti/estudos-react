import React from 'react';

function App() {
  const [contador, setContador] = React.useState(0);

  React.useEffect(() => {
    document.title = 'Total: ' + contador;
  }, [contador]);

  return <button onClick={() => setContador(contador + 1)}>{contador}</button>;
}

export default App;

import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(false);
  const timeoutRef = React.useRef();
  const pRef = React.useRef();

  function handleClick() {
    console.log(pRef.current);

    setNotificacao(true);
    setCarrinho(carrinho + 1);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(false);
    }, 2000);
  }

  return (
    <>
      <p ref={pRef}>
        Este <code>p</code> vai ser referenciado
      </p>
      {notificacao && <p>Item adicionado ao carrinho...</p>}
      <button onClick={handleClick}>{carrinho}</button>
    </>
  );
};

export default App;

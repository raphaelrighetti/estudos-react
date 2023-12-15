import React from 'react';
import { GlobalContext } from './Context/GlobalStorage';

const ButtonLimparDados = () => {
  const { limparDados } = React.useContext(GlobalContext);

  return <button onClick={limparDados}>Limpar Dados</button>;
};

export default ButtonLimparDados;

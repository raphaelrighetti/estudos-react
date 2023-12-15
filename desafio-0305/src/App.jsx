import React from 'react';
import GlobalStorage from './Components/Context/GlobalStorage';
import Produtos from './Components/Produto/Produtos';
import ButtonLimparDados from './Components/ButtonLimparDados';

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

const App = () => {
  return (
    <GlobalStorage>
      <ButtonLimparDados />
      <Produtos />
    </GlobalStorage>
  );
};

export default App;

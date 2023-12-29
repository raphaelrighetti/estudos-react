import React from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import Produtos from './Components/Produtos/Produtos';
import Header from './Components/Header';
import Redirect from './Components/util/Redirect';
import Produto from './Components/Produtos/Produto';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Redirect route={'produtos'} />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="produtos/:id" element={<Produto />} />
        <Route path="contato" element={<Produtos />} />
        <Route
          path="*"
          element={
            <p
              style={{
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
              }}
            >
              não existe nada aqui...
            </p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

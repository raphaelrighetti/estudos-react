import React from 'react';
import NavigationHeader from './Components/Sections/Generic/NavigationHeader';
import Home from './Components/Sections/Home';
import Produtos from './Components/Sections/Produtos/Produtos';

const App = () => {
  const { pathname } = window.location;

  return (
    <>
      <NavigationHeader />
      {pathname === '/' ? <Home /> : <Produtos />}
    </>
  );
};

export default App;

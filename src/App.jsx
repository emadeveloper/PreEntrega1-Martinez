import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a Fitness Outlet'} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
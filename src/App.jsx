import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/ItemCount';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a Fitness Outlet'} />
      <ItemCount stock={5} initial={1}/> 
    </div>
  );
}

export default App;
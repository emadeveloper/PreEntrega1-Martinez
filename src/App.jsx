import Footer from './Components/common/footer/Footer';
import Home from './pages/home';
import NavBar from './Components/common/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';
import ItemDetailContainer from './Components/Containers/ItemDetailContainer';

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
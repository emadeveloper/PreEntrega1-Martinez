import Home from "./pages/home";
import NavBar from "./Components/common/navbar/NavBar";
import Cart from "./pages/cart/CartView";
import Checkout from "./pages/checkout/checkout";
import Footer from "./Components/common/footer/Footer";
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEozvNSIqTAXlkRezBdgiquPuDMEFkRSI",
  authDomain: "coderhouse-52230.firebaseapp.com",
  projectId: "coderhouse-52230",
  storageBucket: "coderhouse-52230.appspot.com",
  messagingSenderId: "37850679805",
  appId: "1:37850679805:web:96346fa42fd1a6f7a2f194",
  measurementId: "G-L1ZSG8F5ZM",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Home />} />
            <Route path="item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="*" element={<Home/>}/>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

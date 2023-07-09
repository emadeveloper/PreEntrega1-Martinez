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
  apiKey            : process.env.REACT_APP_API_KEY,
  authDomain        : process.env.REACT_APP_AUTH_DOMAIN,
  projectId         : process.env.REACT_APP_PROJECT_ID,
  storageBucket     : process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId : process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId             : process.env.REACT_APP_APP_ID,
  measurementId     : process.env.REACT_APP_MEASUREMENT_ID,
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

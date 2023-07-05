import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartitem/CartItem";
import "./cart-view.css";

const Cart = () => {
  const { cart, getTotalItems, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2 className="total-items-title">No hay productos agregados a tu carrito</h2>
        <Link className="shopping-link" to="/">Agrega productos al carrito</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <h2 className="total-items-title">Cantidad total de productos: {getTotalItems()}</h2>
      <h2 className="total-items-price">Total a pagar: $ {totalPrice()}</h2>
      <Link className="checkout-button" to="/">Finalizar compra</Link>
    </div>
  );
};

export default Cart;

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart-item.css";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="item-cart">
      <img className="item-cart-img" src={product.img} alt={product.title} />
      <div>
        <h3 className="item-cart-text">{product.title}</h3>
        <h3 className="item-cart-text">Precio por unidad: ${product.price}</h3>
        <h3 className="item-cart-text">
          Cantidad de unidades: {product.quantity}
        </h3>
        <h3 className="item-cart-text">
          Subtotal: $ {product.price * product.quantity}
        </h3>
        <button
          className="item-cart-button"
          onClick={() => removeFromCart(product.id)}
        >
          Eliminar producto del carrito
        </button>
        <Link to="/">
          <button className="item-cart-button">Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;

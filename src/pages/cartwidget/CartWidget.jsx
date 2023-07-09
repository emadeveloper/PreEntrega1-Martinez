import Badge from 'react-bootstrap/Badge';
import Cart from "./assets/shopping-cart.svg";
import "./cart-styles.css";
import { Link } from 'react-router-dom';
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

const CartWidget = () => {
    const {getTotalItems} = useContext(CartContext);
return (
    <div>
        <Link to="/cart">
            <img bg="secondary" className="cart" src= {Cart} alt="widget"/>
        </Link>
        <Badge bg="secondary">{getTotalItems()}</Badge>
    </div>
    );
};

export default CartWidget;

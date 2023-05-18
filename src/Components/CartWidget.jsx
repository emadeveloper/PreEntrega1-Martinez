import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return ( 
        <li className="nav-item">
            <a className="nav-link" href="#">
                <FontAwesomeIcon icon= {BsCart3} />
            </a>
        </li>
    
    
    )
    
};

export default CartWidget;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({ cartCount }) => {
return (
    <div className="cart-widget">
        <span className="d-none d-sm-inline"><FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /></span>
        {cartCount > 0 && (
            <Badge pill bg="danger" className="item-count">{cartCount}</Badge>
        )}
            <style jsx>{`
                .cart-widget {
                display: inline-block;
                position: relative;
                }

                .cart-icon {
                color: white;
                }

                .item-count {
                position: absolute;
                top: -8px;
                right: -8px;
                font-size: 12px;
                }`}
            </style>
    </div>
    );
};


export default CartWidget;

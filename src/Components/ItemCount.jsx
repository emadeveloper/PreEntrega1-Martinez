import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


const ItemCount = ({initial,stock,onAdd}) => {
const [count, setCount] = useState(parseInt(initial));

    const buttonIncrement = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };

    const buttonDecrement = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    useEffect(() => {
        setCount(parseInt (initial));
    }, [initial]);

    return (
        <div>
        <button disabled={count <= 1} onClick={buttonDecrement}>-</button>
        <h2>Cantidad: {count}</h2>
        <button disabled={count >= stock} onClick={buttonIncrement}>+</button>
        <Button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;


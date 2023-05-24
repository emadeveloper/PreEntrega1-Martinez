import React, { useState } from 'react';


const ItemCount = () => {
const [count, setCount] = useState(1);
const stock = 5;

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

return (
    <div>
    <h2>Cantidad: {count}</h2>
    <button onClick={buttonDecrement}>-</button>
    <button onClick={buttonIncrement}>+</button>
    </div>
);
};

export default ItemCount;


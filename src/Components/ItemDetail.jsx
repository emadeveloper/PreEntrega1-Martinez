import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
    const onAdd = (count) => {
        console.log(`Agregaste ${count} productos al carrito`);
    };
    return(
        <div>
            <h1>ItemDetail</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;
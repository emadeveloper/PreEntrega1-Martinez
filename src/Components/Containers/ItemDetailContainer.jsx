import ItemDetail from "../common/itemdetail/ItemDetail";
import { useState, useEffect } from "react";
import data from "../../data.js"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
        const [product, setProduct] = useState({});
        const {itemId} = useParams();

        useEffect(() => {
            const getProduct = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(data);
                    }, 2000);
                });
                getProduct.then(res =>
                    setProduct(res.find(item => item.id === parseInt(itemId))))
                
        },[itemId]);

    
    return(
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
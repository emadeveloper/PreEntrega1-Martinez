import ItemDetail from "../common/itemdetail/ItemDetail";
import { useState, useEffect } from "react";
import data from "../../data.js"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
        const [product, setProduct] = useState(null);
        const {itemId} = useParams();

        useEffect(() => {
            const getProductId = () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(data.find((item) => item.id === 1));
                    }, 2000);
                });
            };
        getProductId(itemId)
            .then(result => {setProduct(result)})
            .catch(error => {console.error(error)});
    },[itemId]);

    
    return(
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
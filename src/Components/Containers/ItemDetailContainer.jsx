import ItemDetail from "../common/itemdetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductFromFirestore } from "../services/firebase/products";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductFromFirestore(itemId).then((result) => {
      setProduct(result);
    });
  }, [itemId]);

  return (
    <div>
      {!product ? (
        <div className="loading-spinner">
          <Spinner className="spinner-custom" animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
            </Spinner>
            </div>
            ) : <ItemDetail product={product} />
            }
      
    </div>
  );
};

export default ItemDetailContainer;

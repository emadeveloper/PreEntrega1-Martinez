import ItemDetail from "../common/itemdetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductFromFirestore } from "../services/firebase/products";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./container-styles/item-detail-container.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getProductFromFirestore(itemId).then((result) => {
      setProduct(result);
      setLoading(false);
    });
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <Spinner className="spinner-custom" animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
            </Spinner>
            </div>
            ) : product ? (
              <ItemDetail product={product} />
              ) : (<h2 className="item-not-found">El producto no existe</h2>)
            }
      
    </div>
  );
};

export default ItemDetailContainer;

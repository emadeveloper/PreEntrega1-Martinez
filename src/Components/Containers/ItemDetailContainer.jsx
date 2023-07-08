import ItemDetail from "../common/itemdetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductFromFirestore } from "../services/firebase/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getProductFromFirestore(itemId).then((result) => {
      setProduct(result);
    });
  }, [itemId]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../common/itemlist/ItemList";
import { getProductsFromFirestore } from "../services/firebase/products";
import Imagen from "../../assets/hero-img.jpg";
import { useParams } from "react-router-dom";
import "./container-styles/item-list-container-styles.css";
import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductsFromFirestore().then((result) => {
      if (categoryId) {
        setProducts(
          result.filter((product) => product.category === categoryId)
        );
      } else {
        const elementsComparison = (a, b) => {
          if (a.category < b.category) {
            return -1;
          }
          if (a.category > b.category) {
            return 1;
          }
          return 0;
        };
        // sort result by category
        result.sort(elementsComparison);
        setProducts(result);
      }
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <>
      <Container fluid>
        {loading ? (
          <div className="loading-spinner">
            <Spinner
              className="spinner-custom"
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div>
        ) : (
          <Row className="justify-content-center align-items-center h-100">
            <Col xs={12} className="text-center">
              <img className="hero-img" src={Imagen} alt="hero" />
              <h2 className="my-heading"> Nuestro Catalogo </h2>
            </Col>
            <ItemList products={products} />
          </Row>
        )}
      </Container>
    </>
  );
};

export default ItemListContainer;

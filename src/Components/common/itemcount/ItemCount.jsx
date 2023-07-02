import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "./item-count-styles.css";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

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
    <Container>
      <Row className="justify-content-center">
        <Col md="auto">
          <Button
            className="counter-button"
            variant="secondary"
            disabled={count <= 1}
            onClick={buttonDecrement}
          >
            -
          </Button>
        </Col>
        <Col md="auto">
          <Card.Text>Cantidad: {count}</Card.Text>
        </Col>
        <Col md="auto">
          <Button
            className="counter-button"
            variant="secondary"
            disabled={count >= stock}
            onClick={buttonIncrement}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md="auto">
          <Button
            className="shop-button"
            variant="primary"
            disabled={!stock}
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCount;

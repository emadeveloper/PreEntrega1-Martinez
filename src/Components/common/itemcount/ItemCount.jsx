import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

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
                    <Button variant="secondary"disabled={count <= 1} onClick={buttonDecrement}>-</Button>
                </Col>
                <Col md="auto">
                    <Card.Text>Cantidad: {count}</Card.Text>
                </Col>
                <Col md="auto">
                    <Button variant="secondary"disabled={count >= stock} onClick={buttonIncrement}>+</Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md="auto">
                    <Button variant="primary"disabled={!stock} onClick={() => onAdd(count)}>Agregar al carrito</Button>
                </Col>
            </Row>
        </Container>
    );
};


export default ItemCount;

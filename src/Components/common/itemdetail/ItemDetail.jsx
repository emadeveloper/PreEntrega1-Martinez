import React from "react";
import ItemCount from "../itemcount/ItemCount";
import { Row, Col, Card } from 'react-bootstrap';
import Imagen from "../../../assets/musculosa.png";

const ItemDetail = ({product}) => {

    return(
        <Row>
            <Col key={product.id} md={4}>
                <Card style={{ width: '18rem' }}>
                    <img src={Imagen} alt="t-shirt" />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Card.Text>{product.description}</Card.Text>
                        <footer>
                        <ItemCount stock={5} initial={1}  onAdd={(count) => console.log (`Agregaste ${count} productos al carrito` )} />
                        </footer>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

    

export default ItemDetail;
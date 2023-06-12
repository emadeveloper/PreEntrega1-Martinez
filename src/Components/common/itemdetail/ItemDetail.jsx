import React from "react";
import ItemCount from "../itemcount/ItemCount";
import { Row, Col, Card } from 'react-bootstrap';

const ItemDetail = ({id, img, title, price, description}) => {
    /* const onAdd = (count) => {
        console.log(`Agregaste ${count} productos al carrito`);
    }; */
    
    return(
        <Row>
        <Col key={id} md={4}>
            <Card style={{ width: '18rem' }}>
                <img src={img} alt="t-shirt" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    
                    <Card.Text>{description}</Card.Text>
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
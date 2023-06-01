
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import musculosa from '../img/musculosa.png';

const Item = () => {
    const items = [
        { title: 'Remera Musculosa La resistencia universal', price:'$ '+ 1000, stock: 'stock disponible '+10 },
        { title: 'Remera Musculosa La resistencia universal', price:'$ '+ 2000, stock: 'stock disponible '+15 },
        { title: 'Remera Musculosa La resistencia universal', price:'$ '+ 1500, stock:'stock disponible '+7 },
    ];

    return (
        <Row>
        {items.map((newItem, index) => (
            <Col key={index} md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={musculosa} />
                <Card.Body>
                    <Card.Title>{newItem.title}</Card.Title>
                    <Card.Text>{newItem.price}</Card.Text>
                    <Button>Ver más detalles del producto</Button>
                    <Card.Text>{newItem.stock}</Card.Text>
                </Card.Body>
                
            </Card>
            </Col>
        ))}
        </Row>
    );
    };
    
export default Item;


import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import musculosa from '../img/musculosa.png';

const Item = (props) => {

    return (
            <Row>
                <Col key={props.id} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={musculosa} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{props.price}</Card.Text>
                            <Button>Ver más detalles del producto</Button>
                            <Card.Text>{props.stock}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    );
};

export default Item;

import React from "react";
import Item from "./Item";
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = (props) => {
    return(
        <Container>
            <Row>
                {props.products.map((product) => (
                    <Col>
                        <Item key={product.id} title={product.title} price={product.price} stock={product.stock}/>
                    </Col>
                ))};
            </Row>
        </Container>
    );
};

export default ItemList;

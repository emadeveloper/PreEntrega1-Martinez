import React from "react";
import Item from "../item/Item";
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ({products}) => {
    return(
        <Container>
            <Row>
                {products.map((product,index) => (
                    <Col key={index}>
                        <Item
                            key={product.id} 
                            id={product.id} 
                            title={product.title} 
                            price={product.price} 
                            stock={product.stock} 
                            img={product.img}/>
                    </Col>
                ))};
            </Row>
        </Container>
    );
};



export default ItemList;

import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


const ItemListContainer = ({greeting}) => {
    return (
            <Container fluid>
                <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="text-center">
                    <h2 className="my-heading"> {greeting} </h2>
                </Col>
                </Row>
            </Container>
        
        
    )
}



export default ItemListContainer;
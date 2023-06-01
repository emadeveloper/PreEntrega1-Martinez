import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from "./ItemList";
import musculosa from "../img/hero-img.jpg"



const ItemListContainer = ({greeting}) => {
    return <>
            <Container fluid>
                <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="text-center">
                    <h2 className="my-heading"> {greeting} </h2>
                </Col>
                </Row>
            </Container>
            <div >
                <img width={1200} height={500} src={musculosa} alt="hero-img" />
            </div>
            <ItemList />
            </>            
}



export default ItemListContainer;
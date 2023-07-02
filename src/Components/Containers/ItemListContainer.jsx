import {useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from "../common/itemlist/ItemList";
import data from "../../data.js"
import Imagen from "../../assets/hero-img.jpg";
import { useParams } from "react-router-dom";
import './container-styles/item-list-container-styles.css'

    const ItemListContainer = () => {
        const [products, setProducts] = useState([]);
        const {categoryId} = useParams();
        
        useEffect(() => {
            const getProducts = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(data);
                    }, 2000);
                });
                if (categoryId) {getProducts.then(result => 
                        setProducts(result.filter(product => product.category === categoryId)));
                } 
                else {
                    getProducts.then(result => setProducts(result));
                    };
        }, [categoryId]);
                

    return (
    <>
        <Container fluid>
                <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="text-center">
                    
                    <img className="hero-img" src={Imagen} alt="hero" />
                    <h2 className="my-heading" > Nuestro Catalogo </h2>
                </Col>
                <ItemList products={products} />
                </Row>
            </Container>
    </>
    );            
};

export default ItemListContainer;
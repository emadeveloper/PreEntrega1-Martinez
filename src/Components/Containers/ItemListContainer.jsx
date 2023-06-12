import {useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from "../common/itemlist/ItemList";
import data from "../../data.js"
import Imagen from "../../assets/hero-img.jpg";
import { useParams } from "react-router-dom";

    const ItemListContainer = ({greeting}) => {
        const [products, setProducts] = useState([]);
        const {categoryId} = useParams();
        
        useEffect(() => {
            const getProducts = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(data);
                    }, 2000);
                });
                if (categoryId) {getProducts.then(result => 
                        setProducts(result.filter(product => product.category === categoryId)))
                    .catch(error => {console.error(error)});
                } 
                else {
                    getProducts.then(result => setProducts(result));
                    }
        }, [categoryId]);
                

    return (
    <>
            <Container fluid>
                <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="text-center">
                    <h2 className="my-heading"> {greeting} </h2>
                    <img width={1200} height={500} src={Imagen} alt="hero" />
                    <h2 className="my-heading" > Nuestro Catalogo </h2>
                </Col>
                <ItemList products={products} />
                </Row>
            </Container>
    </>
    );            
};




export default ItemListContainer;
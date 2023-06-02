import {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from "./ItemList";
import musculosa from "../img/hero-img.jpg"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            setTimeout(() => {
                const productsData = [
                    { id: 1, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 1000, stock: 'stock disponible '+10 },
                    { id: 2, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 2000, stock: 'stock disponible '+15 },
                    { id: 3, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 1500, stock:'stock disponible '+7 },
                    { id: 4, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 1000, stock: 'stock disponible '+10 },
                    { id: 5, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 2000, stock: 'stock disponible '+15 },
                    { id: 6, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 1500, stock:'stock disponible '+7 },
                    { id: 7, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 2000, stock: 'stock disponible '+15 },
                    { id: 8, title: 'Remera Musculosa La resistencia universal', price:'$ '+ 1500, stock:'stock disponible '+7 },
                ];
                setProducts(productsData);
            }, 2000);
        };
        getProducts();
    },[]);

    return (
    <>
            <Container fluid>
                <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} className="text-center">
                    <h2 className="my-heading"> {greeting} </h2>
                </Col>
                    <img width={1200} height={500} src={musculosa} alt="hero-img" />
                    <h2 className="my-heading"> {greeting} </h2>
                <ItemList products={products} />
                </Row>
            </Container>
    </>
    );            
};



export default ItemListContainer;
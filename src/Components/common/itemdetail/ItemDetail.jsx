import { useState, useContext } from "react";
import ItemCount from "../itemcount/ItemCount";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item-detail-styles.css";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({ product } ) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    let footerContent;

    const onAdd = (quantity) => {
        setQuantity(quantity);
        const item = { ...product, quantity: quantity}
        addToCart(item, quantity);
    };
    

    if (quantity === 0) {
        footerContent = <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />;
    } else {
        footerContent = (
            <>
            <Link to="/cart"><Button className="shop-button" variant="primary">Proceder al Checkout</Button></Link>
            <Link to="/"><Button className="shop-button" variant="primary">Seguir comprando</Button></Link>
            </>
        );
    }

    return (
        <Row className="justify-content-center align-items-center h-100">
            <Col key={product.id} md={4}>
                <Card style={{ width: "18rem" }}>
                    <img className="item-detail-img" src={product.img} alt="t-shirt" />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Card.Text>{product.description}</Card.Text>
                        <footer>{footerContent}</footer>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ItemDetail;

import { Row, Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imagen from "../../../assets/musculosa.png";



const Item = (props) => {

    return (
            <Row>
                <Col key={props.id} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <img src={Imagen} alt="t-shirt" />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{props.price}</Card.Text>
                            <Link to={`/item/${props.id}`}>Ver más detalles del producto</Link>
                            <Card.Text>{props.stock}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    );
};

export default Item;

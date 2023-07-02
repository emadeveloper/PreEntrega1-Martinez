import { Row, Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './item-styles.css';

const Item = (props) => {

    return (
            <Row>
                <Col key={props.id} md={4}>
                    <Card className='card' style={{ width: '18rem' }}>
                        <img className='card-image' src={props.img} alt="t-shirt" />
                        <Card.Body className='card-body'>
                        <hr />
                            <Card.Title className='card-title'>{props.title}</Card.Title>
                            <Card.Text className='card-price'>{props.price}</Card.Text>
                            <hr />
                            <Link className='card-link' to={`/item/${props.id}`}>Ver más detalles del producto</Link>
                            <Card.Text>{`stock disponible: ${props.stock}`}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    );
};

export default Item;

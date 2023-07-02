import { NavLink } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import './footer-styles.css';

const Footer = () => {
    return (
            <Container className='footer-container' >
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <h3 className='footer-title' >Navegacion</h3>
                        <ul className='footer-link-list'>
                            <li><NavLink className='footer-link' to="/">Home</NavLink></li>
                            <li><NavLink className='footer-link' to="/">Productos</NavLink></li>
                            <li><NavLink className='footer-link' to="category/remeras">Remeras</NavLink></li>
                            <li><NavLink className='footer-link' to="category/pantalones">Pantalones</NavLink></li>
                            <li><NavLink className='footer-link' to="category/buzos">Buzos</NavLink></li>
                            <li><NavLink className='footer-link' to="/contacto">Contacto</NavLink></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <h3 className='footer-title'>Contactanos</h3>
                        <ul className='footer-link-list'>
                            <li><NavLink className='footer-link' to="/">Teléfono: 123456789</NavLink></li>
                            <li><NavLink className='footer-link' to="/">Email: laresistencia@gmail.com </NavLink></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <h3 className='footer-title'>Medios de pago</h3>
                        <ul className='footer-link-list'>
                            <li><NavLink className='footer-link' to="/">Mercado Pago</NavLink></li>
                            <li><NavLink className='footer-link' to="/">Tarjetas de crédito</NavLink></li>
                            <li><NavLink className='footer-link' to="/">Tarjetas de débito</NavLink></li>
                        </ul>
                    </Col >
                    <Col xs={6} md={4} lg={3}>
                        <h3 className='footer-title'>Redes sociales</h3>
                        <ul className='footer-link-list'>
                            <li><NavLink className='footer-link' to="/">Facebook</NavLink></li>
                            <li><NavLink className='footer-link' to="/">Instagram</NavLink></li>
                            <li><NavLink className='footer-link' to="/">Twitter</NavLink></li>
                        </ul>
                    </Col>
                    <div >
                        <p className='footer-text'>COPYRIGHT LA RESISTENCIA - 2023. TODOS LOS DERECHOS RESERVADOS.</p>
                    </div>
                </Row>
            </Container>
    )
};

export default Footer;

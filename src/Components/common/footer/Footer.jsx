import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__logo">
                    <img src="" alt="logo" />
                </div>
                <div className="footer__container__links">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Productos</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                </div>
                <div className="footer__container__social">
                    <ul>
                        {/* <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter-square"></i></a></li> */}
                    </ul>
                    <p>COPYRIGHT LA RESISTENCIA - 2023. TODOS LOS DERECHOS RESERVADOS.</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;

import CartWidget from '../../../pages/cartwidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function NavBar(onAdd) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Fitness Outlet</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={ `category/remeras`}>Remeras</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={ `category/buzos`}>Buzos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`category/pantalones`}>Pantalones</NavLink>
            </li>
          </ul>
          <CartWidget cartCount={onAdd} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


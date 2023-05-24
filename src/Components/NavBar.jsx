import React from 'react';
import CartWidget from './CartWidget';
import { useState } from "react";

const cartCount = 5;
const NavBar = () => {
  const categorias = [
    { id: 1, nombre: "Home", enlace: "#", dropdown: false },
    { id: 2, nombre: "Productos", enlace: "#", dropdown: true },
    { id: 3, nombre: "Sobre Nosotros", enlace: "#", dropdown: false },
    { id: 4, nombre: "Contacto", enlace: "#", dropdown: false },
  ];

  const [menuDropdown, setMenuDropdown] = useState(null);

  const handleMouseEnter = (categoriaId) => {
    setMenuDropdown(categoriaId);
  };

  const handleMouseLeave = () => {
    setMenuDropdown(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Fitness Outlet
      </a>
      <button
        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {categorias.map((categoria) => {
            if (categoria.dropdown) {
              return (
                <li
                  className={`nav-item dropdown ${
                    menuDropdown === categoria.id ? "show" : ""
                  }`}
                  key={categoria.id}
                  onMouseEnter={() => handleMouseEnter(categoria.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href={categoria.enlace}
                    id={`dropdown-${categoria.id}`}
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={menuDropdown === categoria.id ? "true" : "false"}
                  >
                    {categoria.nombre}
                  </a>
                  <div
                    className={`dropdown-menu ${
                      menuDropdown === categoria.id ? "show" : ""
                    }`}
                    aria-labelledby={`dropdown-${categoria.id}`}
                  >
                    <a className="dropdown-item" href="#">
                      Remeras
                    </a>
                    <a className="dropdown-item" href="#">
                      Pantalones
                    </a>
                    <a className="dropdown-item" href="#">
                      Buzos
                    </a>
                  </div>
                </li>
              );
            } else {
              return (
                <li className="nav-item" key={categoria.id}>
                  <a className="nav-link" href={categoria.enlace}>
                    {categoria.nombre}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <CartWidget cartCount = {cartCount} />
    </nav>
  );
};
  
export default NavBar;

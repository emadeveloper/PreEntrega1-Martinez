import { useState } from "react";
import "./checkout-styles.css";

const CheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (email === emailConfirm && email !== "") {
      alert("Te registraste correctamente");
    } else {
      alert("Los emails no coinciden o no ingresaste ningun email");
    }
  };
  return (
    <div className="checkout-form">
      <h2 className="checkout-title">Registrate para finalizar tu compra</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Apellido"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar Email</label>
          <input
            type="email"
            className="form-control"
            id="confirmEmail"
            placeholder="Confirmar Email"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Teléfono"
          />
        </div>
        <div className="form-control">
          <button onClick={handleRegister} type="submit" className="buy-button">
            Finalizar compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

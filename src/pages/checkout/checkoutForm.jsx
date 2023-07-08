import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout-styles.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, totalPrice, resetCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [emailConfirm, setEmailConfirm] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState({});
  const [loading, setLoading] = useState(false);

  const newOrder = {
    buyer: {
      name: name,
      surname: surName,
      email: email,
      phone: phone,
    },
    items: cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
    })),
    total: totalPrice(),
    date: new Date(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const db = getFirestore();
    const ordersCollectionRef = collection(db, "orders");
    try {
      const docRef = await addDoc(ordersCollectionRef, newOrder);
      setOrderId(docRef.id);
      setOrderPlaced(true);
      resetCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
    setLoading(false);
  };

  return (
    <div className="checkout-form">
      {loading ? (
        <div className="loading-spinner">Cargando...</div>
      ) : orderPlaced ? (
        <div>
          <h3>¡Compra realizada con éxito!</h3>
          <p>Tu número de orden es: {orderId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="checkout-title">
            Registrate para finalizar tu compra
          </h2>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Apellido"
              value={surName}
              onChange={(e) => setSurname(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-control">
            <button type="submit" className="buy-button">
              Finalizar compra
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;

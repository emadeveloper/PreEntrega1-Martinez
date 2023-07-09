import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((cartElement) => {
          return cartElement.id === item.id
            ? { ...cartElement, quantity: cartElement.quantity + quantity }
            : cartElement;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false);

  const removeFromCart = (itemId) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const resetCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        removeFromCart,
        resetCart,
        getTotalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

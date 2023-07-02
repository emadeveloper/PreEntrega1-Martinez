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
      console.log('pepito :', item, quantity)
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
    const newLocal = (acc, item) => {
      return acc + item.quantity;
    };
    return cart.reduce(newLocal, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        resetCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

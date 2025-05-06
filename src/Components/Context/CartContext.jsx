import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Add or update item in the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);

      if (productIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1; // Update quantity
        setCartCount(updatedCart.length);
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        setCartCount(updatedCart.length); // Update cart count after adding product
        return updatedCart;
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      setCartCount(updatedCart.length); // Update cart count after removal
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

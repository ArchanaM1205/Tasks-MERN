import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Quantity: {product.quantity}</p>
              <p>Price: ${product.price}</p>
              <p>Total: ${product.price * product.quantity}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <div>
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import Navbar from "./Navbar"; // Make sure this is the correct path to your Navbar component

export default function CartPage() {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = Number(product?.price || 0);
      return total + price * product.quantity;
    }, 0);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Your cart is empty!</p>
        ) : (
          <div className="space-y-6">
            {cart.map((product) => {
              const price = Number(product?.price || 0);
              const imageUrl = product?.image || "https://via.placeholder.com/100";

              return (
                <div key={product.id} className="flex gap-6 p-4 border rounded-lg shadow-md">
                  <img src={imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded-md" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.description}</p>
                    <p className="mt-2">Price: ${price.toFixed(2)}</p>

                    <div className="flex items-center space-x-4 mt-4">
                      <button 
                        onClick={() => decreaseQuantity(product.id)} 
                        className="btn btn-sm btn-outline"
                      >
                        -
                      </button>
                      <span className="text-lg">{product.quantity}</span>
                      <button 
                        onClick={() => addToCart(product)} 
                        className="btn btn-sm btn-outline"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-2">Total: ${(price * product.quantity).toFixed(2)}</p>

                    <button 
                      onClick={() => removeFromCart(product.id)} 
                      className="mt-3 btn btn-sm btn-error"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-semibold">Total: ${calculateTotal().toFixed(2)}</h2>
            <button className="mt-4 btn btn-lg btn-success">Buy Now</button>
          </div>
        )}
      </div>
    </>
  );
}

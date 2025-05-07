// src/pages/ProductPage.jsx
import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { CartContext } from './Context/CartContext';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const {addToCart}=useContext(CartContext)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">All Products</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {products.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-md w-80">
              <figure className="px-10 pt-10">
                <img src={product.image} alt={product.title} className="h-40 object-contain" />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description.slice(0, 100)}...</p>
                <p className="font-bold text-lg">${product.price}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Buy Now</button>
                  <button className="btn btn-outline" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

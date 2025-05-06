import navbar from 'daisyui/components/navbar';
import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import axios from 'axios';


export default function Dashboard() {
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>setProduct(res.data))
  const[product,setProduct] =useState([{
    title:"Nike",
    description:"Elevate your look with these premium branded blue shoes, crafted for both style and performance. Engineered with top-tier materials for unmatched comfort and durability.",
    image:"data:image/jpeg;base64,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"
  },
  {
    title:"Adidas",
    description:"Designed for all-day comfort, these stylish shoes combine breathable materials with a sleek, versatile look. Perfect for casual outings or daily wear.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSac3ZdJ8aUOaEnsec0w-qiYGass_Hb9sPGaQ&s"
  },
  {
    title:"Puma",
    description:"With a modern silhouette and cushioned support, these shoes offer the ideal blend of comfort and function. Great for everyday use and easy to pair with any outfit.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFy96gumNS_CGIZ1X5fM1Gbc2rgNfk9CCgQ&s"
  }])
  return (
    <>
  {/*{Navbar}*/}
  <Navbar/>
  {/*{Corousel}*/}
  <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://www.shutterstock.com/image-vector/podium-summer-display-pile-sand-260nw-2451275241.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://c8.alamy.com/comp/2S02NKE/50-percent-special-offer-big-sale-limited-time-only-shop-now-template-banner-with-blue-magenta-color-theme-2S02NKE.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://thumbs.dreamstime.com/b/realistic-cosmetic-banner-makeup-products-sale-poster-decorative-cosmetics-brushes-advertising-make-up-store-pithy-vector-304571590.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/035/198/652/small_2x/ai-generated-online-shopping-representation-with-people-on-digital-devices-surrounded-by-gifts-and-icons-of-products-photo.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className='flex gap-5 justify-content-between'>
  {
    product.map((value,index)=>
      index<3 && 
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={value.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{value.title}</h2>
    <p>{value.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
  </div>

    )
  }


</div>
    </>
  );
}



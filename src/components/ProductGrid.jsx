import { useState } from "react";
import img1 from "../assets/product-1.jpg";
import img2 from "../assets/product-2.jpg";
import img3 from "../assets/product-3.jpg";
import img4 from "../assets/product-4.jpg";
import img5 from "../assets/product-5.jpg";
import img6 from "../assets/product-6.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "NUORI Infinity Bio-Fusion Eye Serum",
      price: "$125.00",
      image: img1,
    },
    {
      id: 2,
      name: "NUORI Gentle Glow Tonic",
      price: "$55.00",
      image: img2,
    },
    {
      id: 3,
      name: "Furtuna Skin Cleansing Oil Balm",
      price: "$139.00",
      image: img3,
    },
    {
      id: 4,
      name: "Active Humans Natural Deodorant Rose Neroli",
      price: "$39.00",
      image: img4,
    },
    {
      id: 5,
      name: "Ipsum SPA Body Oil",
      price: "$95.00",
      image: img5,
    },
    {
      id: 6,
      name: "Furtuna Skin Micellar Cleansing Essence",
      price: "$140.00",
      image: img6,
    },
  ];

  return (
    <section className="container mx-auto text-center p-10">
      <h2 className="text-2xl font-bold mb-6">FEATURED PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-60 object-cover"
            />
            <p className="mt-4 font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.price}</p>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all">
                Buy Now
              </button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">JUST LAUNCHED</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-60 object-cover"
            />
            <p className="mt-4 font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.price}</p>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all">
                Buy Now
              </button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

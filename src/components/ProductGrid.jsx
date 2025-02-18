"use client";

import { Card } from "flowbite-react";

import img1 from "../assets/product-1.png";
import img2 from "../assets/product-2.png";
import img3 from "../assets/product-3.png";
import img4 from "../assets/product-4.png";
import img5 from "../assets/product-5.png";
import img6 from "../assets/product-6.png";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "NOIR Infinity Bio-Fusion ",
      price: "125.00",
      model: "INF-ES-2021",
      origin: "USA",
      brand: "NOIR",
      image: img1,
    },
    {
      id: 2,
      name: "NOIR Gentle Glow Tonic",
      price: "55.00",
      model: "GGT-2021",
      origin: "USA",
      brand: "NOIR",
      image: img2,
    },
    {
      id: 3,
      name: "Fortuna Skin ",
      price: "139.00",
      model: "FSCOB-2021",
      origin: "Italy",
      brand: "Fortuna",
      image: img3,
    },
    {
      id: 4,
      name: "Active Humans Natural ",
      price: "39.00",
      model: "AHND-2021",
      origin: "Australia",
      brand: "Active Humans",
      image: img4,
    },
    {
      id: 5,
      name: "Ipsum SPA Body Oil",
      price: "95.00",
      model: "ISBO-2021",
      origin: "France",
      brand: "Ipsum",
      image: img5,
    },
    {
      id: 6,
      name: "Fortuna Skin Micelle",
      price: "140.00",
      model: "FSMCE-2021",
      origin: "Italy",
      brand: "Fortuna",
      image: img6,
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto text-center mt-28">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        FEATURED PRODUCTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <Card
            key={item.id}
            className=" bg-gray-100 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <div>
              <h5 className="text-xl font-bold text-gray-900">
                Name:{item.name}
              </h5>
              <p className="font-normal text-gray-600 mb-2">
                <span className="font-bold">Price:</span> ৳ {item.price}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-bold">Model:</span> {item.model}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-bold">Brand: </span> {item.brand}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-bold">Origin:</span> {item.origin}
              </p>
            </div>

            <div className="flex justify-center mt-3 space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all">
                Buy Now
              </button>
            </div>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-10 text-gray-800 mt-28">
        JUST LAUNCHED
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <Card
            key={item.id}
            className="p-6 bg-gray-100 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <div>
              <h5 className="text-xl font-bold text-gray-900">
                Name:{item.name}
              </h5>
              <p className="font-normal text-gray-600 mb-2">
                <span className="font-bold">Price:</span> ৳ {item.price}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-bold">Model:</span> {item.model}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-bold">Brand: </span> {item.brand}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-bold">Origin:</span> {item.origin}
              </p>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all">
                Buy Now
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

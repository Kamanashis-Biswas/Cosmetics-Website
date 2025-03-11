import { useEffect, useState } from "react";
import GrandSellImg from "../assets/GrandSell/grand-sell.gif";
import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa"; // Added icons for modal
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const GrandSell = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    fetch("../data/grandsell.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded products:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true);
    setActiveImage(product.images[0]);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="max-w-screen-xl mx-auto pt-3 pb-3 md:pt-8 md:pb-9 overflow-hidden relative">
        <div className="p-3 md:p-0">
          <img
            className="w-full rounded-xl shadow-lg mb-5"
            src={GrandSellImg}
            alt="Flash Sell"
          />
        </div>

        {/* Marquee Wrapper */}
        <div className="marquee-container">
          <div className="marquee-content">
            {products.concat(products).map((product, index) =>
              product ? (
                <div
                  key={index}
                  className="marquee-item cursor-pointer"
                  onClick={() => handleCardClick(product)} // Open modal on click
                >
                  <img src={product.images[0]} alt={product.name} />
                  <h3 className="text-lg font-semibold text-gray-900 truncate max-w-full">
                    {product.name} | {product.model}
                  </h3>
                  <p className="flex items-center">
                    {/* <span className="line-through text-gray-500">
                      ৳ {product.price}
                    </span> */}

                    {/* {product.discount_price && (
                      <span className="ml-2 text-red-600 font-bold">
                        ৳ {product.discount_price}
                      </span>
                    )} */}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-2">
          <div className="relative bg-white w-full max-w-[800px] h-auto max-h-[90vh] p-4 rounded-lg shadow-lg z-10 flex flex-col md:flex-row overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 w-8 h-8 rounded-full text-white bg-primary flex items-center justify-center hover:bg-primary-dark"
              onClick={closeModal}
            >
              X
            </button>

            {/* Left - Small Images */}
            <div className="w-full md:w-20 flex md:flex-col items-center gap-4 overflow-x-auto md:overflow-y-auto py-2">
              {selectedProduct.images &&
                selectedProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProduct.name} ${index}`}
                    className={`w-16 h-16 object-cover cursor-pointer rounded-md ${
                      activeImage === image
                        ? "border-2 border-primary bg-slate-50"
                        : ""
                    }`}
                    onClick={() => setActiveImage(image)}
                  />
                ))}
            </div>

            {/* Middle - Large Image */}
            <div className="w-full md:w-96 flex items-center justify-center p-4">
              <img
                src={activeImage}
                alt={selectedProduct.name}
                className="w-full max-h-[300px] md:max-h-[400px] object-contain bg-slate-50 rounded-md"
              />
            </div>

            {/* Right - Product Info */}
            <div className="w-full md:w-80 p-4">
              <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-2 text-start">
                {selectedProduct.name}
              </h2>
              <p className="text-lg font-bold text-start my-2">
                {selectedProduct.model}
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <FaRegStar className="text-yellow-400" />
              </div>
              <Link
                to="https://www.facebook.com/shoppersperk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex gap-2 justify-center items-center w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all">
                  <FaShoppingCart /> BUY NOW
                </button>
              </Link>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">About</p>
                  <button
                    onClick={toggleDescription}
                    className="ml-2 flex items-center"
                  >
                    {showDescription ? <AiOutlineUp /> : <AiOutlineDown />}
                  </button>
                </div>
                {showDescription && (
                  <p className="text-sm text-start">
                    {selectedProduct.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrandSell;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import fragranceCover from "../assets/cover/fragrance.jpg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import LoadingScreen from "../components/LoadingScreen";

const Fragrance = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("../data/fragrance.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component is rendered
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
    setActiveImage(product.images[0]); // Set the main image to the first image
    setShowDescription(false); // Reset description visibility when modal opens
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative w-full h-64 md:h-[50vh] overflow-hidden">
        <img
          src={fragranceCover}
          alt="Fragrance Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Fragrance Products
          </h1>
        </div>
      </div>
      <section className="max-w-screen-xl mx-auto mb-8 md:mb-16 text-center mt-14 md:mt-28">
        <div className=" flex justify-end mb-6 px-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex mb-10 justify-between items-center font-poppins px-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-poppins px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => handleBuyNow(item)}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out group"
              >
                <div className="absolute inset-0 w-full h-full rounded-md border-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 animate-border pointer-events-none"></div>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-32 md:w-64 h-32 md:h-64 mx-auto pt-3 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Buttons */}
                <div className="inset-x-0 bottom-0 bg-white p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center">
                  <button
                    onClick={() => handleBuyNow(item)}
                    className="w-full px-4 py-2 flex items-center justify-center gap-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all mt-4 relative overflow-hidden font-semibold duration-500 before:absolute before:inset-x-1/2 before:top-0 before:h-full before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full hover:before:inset-x-0"
                  >
                    <FaShoppingCart /> Buy Now
                  </button>
                </div>
                <div className="p-4">
                  <h5
                    className="text-lg font-semibold text-gray-900 truncate"
                    title={`${item.name} | ${item.model}`}
                  >
                    {item.name} | {item.model}
                  </h5>
                </div>
              </div>
            ))
          ) : (
            <LoadingScreen />
          )}
        </div>

        {/* Modal Section */}
        {openModal && selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-2">
            <div className="relative bg-white w-full max-w-[800px] h-auto md:max-h-[90vh] p-4 rounded-lg shadow-lg z-10 flex flex-col md:flex-row overflow-hidden">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 w-8 h-8 rounded-full text-white bg-primary flex items-center justify-center hover:bg-primary-dark"
                onClick={() => setOpenModal(false)}
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
                      className={`w-16 h-16 object-cover bg-slate-50 p-1 cursor-pointer rounded-md ${
                        activeImage === image ? "border-2 border-primary" : ""
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
                  className="w-full max-h-[200px] md:max-h-[400px] object-contain bg-slate-50 rounded-md"
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
                      onClick={() => setShowDescription(!showDescription)}
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
      </section>
    </div>
  );
};

export default Fragrance;

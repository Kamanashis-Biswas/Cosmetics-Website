import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const SkincareFeatureProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("../data/skincare.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
    setActiveImage(product.images[0]); // Set the main image to the first image
    setShowDescription(false); // Reset description visibility when modal opens
  };

  const handleViewAll = () => {
    navigate("/skincare");
  };

  return (
    <section className="max-w-screen-xl mx-auto text-center mt-14 md:mt-28">
      <div className="flex mb-10 justify-between items-center font-poppins px-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 underline decoration-primary underline-offset-8 decoration-[3px]">
          BEST SELLING SKINCARE
        </h2>
        <div className="flex items-center gap-2 justify-center">
          <button
            className="hover:underline hover:text-blue-400 font-semibold flex items-center"
            onClick={handleViewAll}
          >
            View All
            <HiOutlineArrowLongRight className="ml-1" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-poppins px-4">
        {products.length > 0 ? (
          products.slice(0, 8).map((item) => (
            <div
              key={item.id}
              onClick={() => handleBuyNow(item)}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out group"
            >
              <div className="absolute inset-0 w-full h-full rounded-md border-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 animate-border pointer-events-none"></div>
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-72 h-72 mx-auto transition-transform duration-500 group-hover:scale-105"
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
          <p className="text-gray-500">Loading products...</p>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={handleViewAll}
          className="bg-primary mt-10 text-white text-xl px-6 py-2 rounded-full hover:bg-primary-dark transition-all"
        >
          <div className="flex justify-between items-center gap-2 group font-poppins">
            <p className="text-gray-50 transition-transform transform group-hover:scale-105 group-hover:text-white duration-300 ease-in-out">
              View All
            </p>
            <HiOutlineArrowLongRight className="text-gray-50 transition-transform transform group-hover:scale-105 group-hover:text-white duration-300 ease-in-out" />
          </div>
        </button>
      </div>

      {/* Modal Section */}
      {openModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-2">
          <div className="relative bg-white w-full max-w-[800px] h-auto max-h-[90vh] p-4 rounded-lg shadow-lg z-10 flex flex-col md:flex-row overflow-hidden">
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
  );
};

export default SkincareFeatureProduct;

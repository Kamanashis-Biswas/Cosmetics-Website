import { useEffect, useState } from "react";
import GrandSellImg from "../assets/GrandSell/grand-sell.gif";
import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa"; // Added icons for modal
import { Modal } from "flowbite-react"; // Using Flowbite Modal
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const GrandSell = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch("/data/skincare.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded products:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
                  <img src={product.image} alt={product.name} />
                  <h3 className="text-lg font-semibold text-gray-900 truncate max-w-full">
                    {product.name} | {product.model}
                  </h3>
                  <p className="flex items-center">
                    <span className="line-through text-gray-500">
                      ৳ {product.price}
                    </span>

                    {product.discount_price && (
                      <span className="ml-2 text-red-600 font-bold">
                        ৳ {product.discount_price}
                      </span>
                    )}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && selectedProduct && (
        <Modal
          show={isModalOpen}
          onClose={closeModal}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white w-[700px] h-[500px] p-6 rounded-lg shadow-lg z-10">
            {/* Close Button (Right Side) */}
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full text-white bg-primary flex items-center justify-center hover:bg-primary-dark transition-all duration-300 ease-in-out"
              onClick={closeModal}
            >
              X
            </button>

            <div className="md:flex items-center h-full gap-4 p-4 font-poppins">
              <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <h2 className="text-gray-800 text-xl md:text-2xl mb-3 font-bold">
                  {selectedProduct.name}
                </h2>
                <div className="flex items-center gap-1 mb-3">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaRegStar className="text-yellow-400" />
                </div>
                <div className="flex gap-3">
                  <p className="text-xl md:text-2xl lin font-bold line-through text-primary-light mb-3">
                    ৳ {selectedProduct.price}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-primary-dark mb-3">
                    ৳ {selectedProduct.discount_price}
                  </p>
                </div>

                <Link
                  to="https://www.facebook.com/wholesaleCosmeticsGallerybd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex gap-2 justify-center items-center w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all">
                    <FaShoppingCart />
                    BUY NOW
                  </button>
                </Link>
                <div>
                  <div className="mt-6 relative">
                    <p className="text-lg md:text-xl font-bold">About</p>
                    <div>
                      <p className="text-sm md:text-base">
                        {isExpanded
                          ? selectedProduct.description
                          : selectedProduct.description.length > 50
                          ? selectedProduct.description.slice(0, 50) + "..."
                          : selectedProduct.description}
                      </p>
                      {selectedProduct.description.length > 50 && (
                        <button
                          onClick={toggleExpand}
                          className="absolute bottom-2 right-2 cursor-pointer flex items-center"
                        >
                          {isExpanded ? (
                            <>
                              <AiOutlineUp className="absolute " />
                            </>
                          ) : (
                            <>
                              <AiOutlineDown className=" absolute " />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GrandSell;

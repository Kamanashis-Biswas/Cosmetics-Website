import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FragranceFeatureProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("../data/fragrance.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
    setActiveImage(product.image); // Set the main image to the first image
    setShowDescription(false); // Reset description visibility when modal opens
  };

  const handleViewAll = () => {
    navigate("/fragrance");
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <section className="max-w-screen-xl mx-auto text-center mt-28">
      <div className="flex mb-10 justify-between items-center font-poppins px-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 underline decoration-primary underline-offset-8 decoration-[3px]">
          BEST SELLING FRAGRANCE
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
                src={item.image}
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

                <p className="text-xl font-bold text-primary mt-2">
                  ৳ {item.price} TK
                </p>
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
      {selectedProduct && (
        <Modal
          className="fixed inset-0 flex items-center justify-center z-50"
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white md:w-[800px] md:h-[600px] p-6 rounded-lg shadow-lg z-10">
            {/* Close Button (Right Side) */}
            <button
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full text-white bg-primary flex items-center justify-center hover:bg-primary-dark transition-all duration-300 ease-in-out"
              onClick={() => setOpenModal(false)}
            >
              X
            </button>

            <div className="relative flex flex-col md:flex-row h-full justify-center gap-4 p-4 font-poppins">
              <div className="relative w-full h-full md:w-1/2 p-2 flex items-center justify-center">
                <div className="absolute left-0 top-0 flex flex-col items-center gap-4 mb-4">
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} small 1`}
                    className={`w-20 h-auto object-cover cursor-pointer ${
                      activeImage === selectedProduct.image
                        ? "border-2 border-primary"
                        : ""
                    }`}
                    onClick={() => handleImageClick(selectedProduct.image)}
                  />
                  <img
                    src={selectedProduct.image2}
                    alt={`${selectedProduct.name} small 2`}
                    className={`w-20 h-auto object-cover cursor-pointer ${
                      activeImage === selectedProduct.image2
                        ? "border-2 border-primary"
                        : ""
                    }`}
                    onClick={() => handleImageClick(selectedProduct.image2)}
                  />
                  <img
                    src={selectedProduct.image3}
                    alt={`${selectedProduct.name} small 3`}
                    className={`w-20 h-auto object-cover cursor-pointer ${
                      activeImage === selectedProduct.image3
                        ? "border-2 border-primary"
                        : ""
                    }`}
                    onClick={() => handleImageClick(selectedProduct.image3)}
                  />
                </div>
                <img
                  src={activeImage}
                  alt={selectedProduct.name}
                  className="w-full h-auto ml-16 object-cover"
                />
              </div>
              <div className="w-full h-full md:w-1/2 p-2">
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
                <p className="text-xl md:text-2xl font-bold text-green-600 mb-3">
                  ৳ {selectedProduct.price}
                </p>
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

                <div className="mt-6 relative">
                  <div className="flex justify-between items-center">
                    <p className="text-lg md:text-xl font-bold">About</p>
                    <button
                      onClick={toggleDescription}
                      className="ml-2 cursor-pointer flex items-center"
                    >
                      {showDescription ? (
                        <AiOutlineUp className="ml-1" />
                      ) : (
                        <AiOutlineDown className="ml-1" />
                      )}
                    </button>
                  </div>
                  {showDescription && (
                    <div>
                      <p className="text-sm md:text-base">
                        {selectedProduct.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default FragranceFeatureProduct;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import LoadingScreen from "../components/LoadingScreen";

const BridalCosmetics = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    fetch("../data/bridal.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
    setActiveImage(product.images[0]);
    setShowDescription(false);
  };

  return (
    <div className="bg-pink-50">
      <section className="max-w-screen-xl mx-auto py-7 md:py-14">
        <h2 className="text-3xl text-start font-bold text-pink-600 mb-6">
          Bridal Beauty Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-poppins px-4">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                onClick={() => handleBuyNow(item)}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out group"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-gray-900 truncate">
                    {item.name}
                  </h5>
                  <h3 className="text-lg text-pink-500 text-start font-semibold">
                    ৳ {item.price}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <LoadingScreen />
          )}
        </div>

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
                <div>
                  <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-2 text-start">
                    ৳ {selectedProduct.price}
                  </h2>
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

export default BridalCosmetics;

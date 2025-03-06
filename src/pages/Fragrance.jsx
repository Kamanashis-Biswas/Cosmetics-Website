import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTags } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

// Import the fragrance cover image
import fragranceCover from "../assets/cover/fragrance.jpg"; // Replace with your image path

const Fragrance = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../data/fragrance.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  return (
    <section className="font-poppins">
      {" "}
      {/* max-w-screen-xl সরানো হয়েছে */}
      {/* Cover Photo Section */}
      <div className="relative w-full h-96 md:h-[50vh] overflow-hidden">
        <img
          src={fragranceCover}
          alt="Fragrance Cover"
          className="w-full h-full object-cover" // rounded-lg সরানো হয়েছে
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Fragrance Products
          </h1>
        </div>
      </div>
      {/* Product Grid Section */}
      <div className="max-w-screen-xl mx-auto text-center mt-8 px-4">
        {" "}
        {/* প্রোডাক্ট গ্রিড কন্টেইনারের মধ্যে */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-poppins">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                onClick={() => handleBuyNow(item)}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out group"
              >
                <div className="absolute inset-0 w-full h-full rounded-md border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-border pointer-events-none"></div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-auto h-44 p-7 mx-auto object-cover transition-transform duration-500 group-hover:scale-125"
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
      </div>
      {/* Modal Section */}
      {selectedProduct && (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="bg-gradient-to-r text-white p-4 rounded-t-lg flex justify-between items-center"></Modal.Header>
          <Modal.Body className="p-6 bg-white rounded-lg shadow-lg transition-all duration-300 font-poppins ease-in-out">
            <div className="flex flex-col items-center space-y-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-auto h-80 object-cover rounded-lg shadow-xl transition-all duration-300 ease-in-out mix-blend-darken"
              />

              <div className="text-start">
                <h2 className="text-gray-800 text-2xl mb-3 font-bold">
                  {selectedProduct.name}
                </h2>
                <div className="flex items-center gap-5 mb-3">
                  <div className="flex justify-start items-center gap-1">
                    <FaTags className="text-gray-800 text-3xl h-8" /> :
                    {selectedProduct.brand}
                  </div>
                  <div className="flex justify-start items-center gap-1">
                    <IoEarth className="text-gray-800 text-3xl h-8" /> :
                    <img
                      className="h-6 w-auto"
                      src={selectedProduct.origin}
                      alt="Origin Flag"
                    />
                  </div>
                </div>

                <p className="text-3xl font-bold text-green-600 mb-3">
                  ৳ {selectedProduct.price}
                </p>

                <p className="text-gray-700 flex gap-2 text-lg">
                  <RxHamburgerMenu className="text-gray-800 text-3xl h-8" />{" "}
                  {selectedProduct.description}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex font-poppins justify-between bg-gray-50 p-4 rounded-b-lg shadow-inner">
            <button
              onClick={() => setOpenModal(false)}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Close
            </button>
            <Link to="https://www.facebook.com/wholesaleCosmeticsGallerybd">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
                Confirm Purchase
              </button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Fragrance;

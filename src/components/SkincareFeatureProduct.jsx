import { useEffect, useState } from "react";
import { Card, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const SkincareFeatureProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
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
  };

  const handleViewAll = () => {
    navigate("/skincare");
  };

  return (
    <section className="max-w-screen-xl mx-auto text-center mt-28">
      <div className="flex mb-10 justify-between items-center px-4">
        <h2 className="text-xl md:text-3xl underline font-bold  text-gray-800">
          FEATURED PRODUCTS
        </h2>
        <button onClick={handleViewAll}>View All{">"}</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.length > 0 ? (
          products.slice(0, 8).map((item) => (
            <Card
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h5>
                <p className="text-gray-700">Model: {item.model}</p>
                <p className="text-gray-700">Brand: {item.brand}</p>
                <p className="text-gray-700">Origin: {item.origin}</p>
                <p className="text-xl font-bold text-blue-600 mt-2">
                  ৳ {item.price}
                </p>
                <button
                  onClick={() => handleBuyNow(item)}
                  className="mt-4 w-full relative overflow-hidden px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg transition-all duration-500 before:absolute before:inset-x-1/2 before:top-0 before:h-full before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full hover:before:inset-x-0"
                >
                  Buy Now
                </button>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">Loading products...</p>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={handleViewAll}
          className="bg-blue-500 mt-10 text-white text-xl px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          View All <span className="text-xl">→</span>
        </button>
      </div>

      {/* Modal Section */}
      {selectedProduct && (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>{selectedProduct.name}</Modal.Header>
          <Modal.Body>
            <div className="flex flex-col items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-80 h-80 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-700">
                  <strong>Model:</strong> {selectedProduct.model}
                </p>
                <p className="text-gray-700">
                  <strong>Brand:</strong> {selectedProduct.brand}
                </p>
                <p className="text-gray-700">
                  <strong>Origin:</strong> {selectedProduct.origin}
                </p>
                <p className="text-xl font-bold text-green-600 mt-3">
                  ৳ {selectedProduct.price}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all"
            >
              Close
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all">
              Confirm Purchase
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default SkincareFeatureProduct;

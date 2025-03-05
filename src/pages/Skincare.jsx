import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";

const Skincare = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);

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

  return (
    <section className="max-w-screen-xl mx-auto text-center mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.length > 0 ? (
          products.map((item) => (
            // <div
            //   key={item.id}
            //   className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
            // >
            //   <img
            //     src={item.image}
            //     alt={item.name}
            //     className="w-auto h-44 mx-auto object-cover"
            //   />
            //   <div className="p-4">
            //     <h5
            //       className="text-lg font-semibold text-gray-900 truncate"
            //       title={`${item.name} | ${item.model}`}
            //     >
            //       {`${
            //         (item.name + " | " + item.model).length > 30
            //           ? (item.name + " | " + item.model).substring(0, 27) +
            //             "..."
            //           : item.name + " | " + item.model
            //       }`}
            //     </h5>

            //     <div className="flex justify-between mt-2 text-sm font-medium">
            //       <p className="text-gray-700">Brand: {item.brand}</p>
            //       <div className="flex items-center gap-1">
            //         <p>Origin: </p>
            //         <img
            //           className="h-3 w-auto"
            //           src={item.origin}
            //           alt="Origin"
            //         />
            //       </div>
            //     </div>
            //     <p className="text-xl font-bold text-blue-600 mt-2">
            //       Price: ৳ {item.price} TK
            //     </p>
            //     <button
            //       onClick={() => handleBuyNow(item)}
            //       className="mt-4 w-full relative overflow-hidden px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg transition-all duration-500 before:absolute before:inset-x-1/2 before:top-0 before:h-full before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full hover:before:inset-x-0"
            //     >
            //       Buy Now
            //     </button>
            //   </div>
            // </div>

            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-auto h-44 mx-auto object-cover transition-transform duration-500 group-hover:scale-150"
              />
              <div className="p-4">
                <h5
                  className="text-lg font-semibold text-gray-900 truncate"
                  title={`${item.name} | ${item.model}`}
                >
                  {`${
                    (item.name + " | " + item.model).length > 30
                      ? (item.name + " | " + item.model).substring(0, 27) +
                        "..."
                      : item.name + " | " + item.model
                  }`}
                </h5>

                <div className="flex justify-between mt-2 text-sm font-medium">
                  <p className="text-gray-700">Brand: {item.brand}</p>
                  <div className="flex items-center gap-1">
                    <p>Origin: </p>
                    <img
                      className="h-3 w-auto"
                      src={item.origin}
                      alt="Origin"
                    />
                  </div>
                </div>
                <p className="text-xl font-bold text-blue-600 mt-2">
                  Price: ৳ {item.price} TK
                </p>
                <button
                  onClick={() => handleBuyNow(item)}
                  className="mt-4 w-full relative overflow-hidden px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg transition-all duration-500 before:absolute before:inset-x-1/2 before:top-0 before:h-full before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full hover:before:inset-x-0"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading products...</p>
        )}
      </div>

      {/* Modal Section */}
      {selectedProduct && (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-t-lg flex justify-between items-center"></Modal.Header>
          <Modal.Body className="p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center space-y-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-auto h-80 object-cover rounded-lg shadow-xl transition-all duration-300 ease-in-out mix-blend-darken"
              />

              <div className="text-start">
                <h2 className="text-gray-800 text-lg">
                  <strong>Product Name: </strong>
                  {selectedProduct.name}
                </h2>
                <div className="flex justify-between">
                  <p className="text-gray-800 text-lg">
                    <strong>Model:</strong> {selectedProduct.model}
                  </p>
                  <p className="text-gray-800 text-lg">
                    <strong>Brand:</strong> {selectedProduct.brand}
                  </p>
                  <div className="flex justify-start items-center gap-1">
                    <p className="text-gray-800 text-lg">Origin:</p>
                    <img
                      className="h-6 w-auto"
                      src={selectedProduct.origin}
                      alt="Origin Flag"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <strong>Description:</strong> {selectedProduct.description}
                </p>
                <p className="text-3xl font-bold text-green-600 mt-3">
                  Price: ৳ {selectedProduct.price}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between bg-gray-50 p-4 rounded-b-lg shadow-inner">
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

export default Skincare;

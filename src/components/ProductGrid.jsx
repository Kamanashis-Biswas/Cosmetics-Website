// import { useState } from "react";
// import { Card, Modal } from "flowbite-react";
// import img1 from "../assets/product-1.png";
// import img2 from "../assets/product-2.png";
// import img3 from "../assets/product-3.png";
// import img4 from "../assets/product-4.png";
// import img5 from "../assets/product-5.png";
// import img6 from "../assets/product-6.png";

// const ProductGrid = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [openModal, setOpenModal] = useState(false);

//   const products = [
//     {
//       id: 1,
//       name: "NOIR Infinity Bio-Fusion",
//       price: "125.00",
//       model: "INF-ES-2021",
//       origin: "USA",
//       brand: "NOIR",
//       image: img1,
//     },
//     {
//       id: 2,
//       name: "NOIR Gentle Glow Tonic",
//       price: "55.00",
//       model: "GGT-2021",
//       origin: "USA",
//       brand: "NOIR",
//       image: img2,
//     },
//     {
//       id: 3,
//       name: "Fortuna Skin",
//       price: "139.00",
//       model: "FICO-2021",
//       origin: "Italy",
//       brand: "Fortuna",
//       image: img3,
//     },
//     {
//       id: 4,
//       name: "Active Humans Natural",
//       price: "39.00",
//       model: "AND-2021",
//       origin: "Australia",
//       brand: "Active Humans",
//       image: img4,
//     },
//     {
//       id: 5,
//       name: "Ipsum SPA Body Oil",
//       price: "95.00",
//       model: "IGBO-2021",
//       origin: "France",
//       brand: "Ipsum",
//       image: img5,
//     },
//     {
//       id: 6,
//       name: "Fortuna Skin Micelle",
//       price: "140.00",
//       model: "FEME-2021",
//       origin: "Italy",
//       brand: "Fortuna",
//       image: img6,
//     },
//   ];

//   const handleBuyNow = (product) => {
//     setSelectedProduct(product);
//     setOpenModal(true);
//   };

//   return (
//     <section className="max-w-screen-xl mx-auto text-center mt-28">
//       <h2 className="text-3xl font-bold mb-10 text-gray-800">
//         FEATURED PRODUCTS
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//         {products.map((item) => (
//           <Card
//             key={item.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h5 className="text-lg font-semibold text-gray-900">
//                 {item.name}
//               </h5>
//               <p className="text-gray-700">Model: {item.model}</p>
//               <p className="text-gray-700">Brand: {item.brand}</p>
//               <p className="text-gray-700">Origin: {item.origin}</p>
//               <p className="text-xl font-bold text-blue-600 mt-2">
//                 ৳ {item.price}
//               </p>
//               <button
//                 onClick={() => handleBuyNow(item)}
//                 className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Modal Section */}
//       {selectedProduct && (
//         <Modal show={openModal} onClose={() => setOpenModal(false)}>
//           <Modal.Header className="text-xl font-bold text-gray-900">
//             {selectedProduct.name}
//           </Modal.Header>
//           <Modal.Body>
//             <div className="flex flex-col items-center text-center p-4">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="w-96 h-96 object-cover rounded-lg shadow-md"
//               />
//               <div className="mt-4">
//                 <p className="text-gray-700 text-lg">
//                   <strong>Model:</strong> {selectedProduct.model}
//                 </p>
//                 <p className="text-gray-700 text-lg">
//                   <strong>Brand:</strong> {selectedProduct.brand}
//                 </p>
//                 <p className="text-gray-700 text-lg">
//                   <strong>Origin:</strong> {selectedProduct.origin}
//                 </p>
//                 <p className="text-2xl font-bold text-blue-600 mt-3">
//                   ৳ {selectedProduct.price}
//                 </p>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer className="flex justify-end">
//             <button
//               onClick={() => setOpenModal(false)}
//               className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-all"
//             >
//               Close
//             </button>
//             <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all">
//               Confirm Purchase
//             </button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </section>
//   );
// };

// export default ProductGrid;

import { useState } from "react";
import { Card, Modal } from "flowbite-react";
import img1 from "../assets/product-1.png";
import img2 from "../assets/product-2.png";
import img3 from "../assets/product-3.png";
import img4 from "../assets/product-4.png";
import img5 from "../assets/product-5.png";
import img6 from "../assets/product-6.png";

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const products = [
    {
      id: 1,
      name: "NOIR Infinity Bio-Fusion",
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
      name: "Fortuna Skin",
      price: "139.00",
      model: "FICO-2021",
      origin: "Italy",
      brand: "Fortuna",
      image: img3,
    },
    {
      id: 4,
      name: "Active Humans Natural",
      price: "39.00",
      model: "AND-2021",
      origin: "Australia",
      brand: "Active Humans",
      image: img4,
    },
    {
      id: 5,
      name: "Ipsum SPA Body Oil",
      price: "95.00",
      model: "IGBO-2021",
      origin: "France",
      brand: "Ipsum",
      image: img5,
    },
    {
      id: 6,
      name: "Fortuna Skin Micelle",
      price: "140.00",
      model: "FEME-2021",
      origin: "Italy",
      brand: "Fortuna",
      image: img6,
    },
  ];

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  return (
    <section className="max-w-screen-xl mx-auto text-center mt-28">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        FEATURED PRODUCTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((item) => (
          <Card
            key={item.id}
            className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h5 className="text-lg font-bold text-gray-900">{item.name}</h5>
              <p className="text-gray-600">
                Model: <span className="font-medium">{item.model}</span>
              </p>
              <p className="text-gray-600">
                Brand: <span className="font-medium">{item.brand}</span>
              </p>
              <p className="text-gray-600">
                Origin: <span className="font-medium">{item.origin}</span>
              </p>
              <p className="text-xl font-bold text-green-600 mt-3">
                ৳ {item.price}
              </p>
              <button
                onClick={() => handleBuyNow(item)}
                className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
              >
                Buy Now
              </button>
            </div>
          </Card>
        ))}
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

export default ProductGrid;

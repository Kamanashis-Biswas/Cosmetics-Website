// import { useEffect, useState } from "react";
// import { Modal } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { FaRegStar, FaShoppingCart } from "react-icons/fa";
// import haircareCover from "../assets/cover/haircare.jpg";
// import { FaStar } from "react-icons/fa6";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

// const Haircare = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [showDescription, setShowDescription] = useState(false);
//   const [activeImage, setActiveImage] = useState(null);

//   useEffect(() => {
//     fetch("../data/haircare.json")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error loading products:", error));
//   }, []);

//   const handleBuyNow = (product) => {
//     setSelectedProduct(product);
//     setOpenModal(true);
//     setActiveImage(product.image); // Set the main image to the first image
//     setShowDescription(false);
//   };

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   };

//   const handleImageClick = (image) => {
//     setActiveImage(image);
//   };

//   return (
//     <section className="font-poppins">
//       <div className="relative w-full h-96 md:h-[50vh] overflow-hidden">
//         <img
//           src={haircareCover}
//           alt="Haircare Cover"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white">
//             Haircare Products
//           </h1>
//         </div>
//       </div>
//       {/* Product Grid Section */}
//       <div className="max-w-screen-xl mx-auto text-center mt-8 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-poppins">
//           {products.length > 0 ? (
//             products.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => handleBuyNow(item)}
//                 className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out group"
//               >
//                 <div className="absolute inset-0 w-full h-full rounded-md border-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 animate-border pointer-events-none"></div>
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-72 h-72 mx-auto"
//                 />

//                 {/* Hover Buttons */}
//                 <div className="inset-x-0 bottom-0 bg-white p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center">
//                   <button
//                     onClick={() => handleBuyNow(item)}
//                     className="w-full px-4 py-2 flex items-center justify-center gap-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all mt-4 relative overflow-hidden font-semibold duration-500 before:absolute before:inset-x-1/2 before:top-0 before:h-full before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full hover:before:inset-x-0"
//                   >
//                     <FaShoppingCart /> Buy Now
//                   </button>
//                 </div>

//                 <div className="p-4">
//                   <h5
//                     className="text-lg font-semibold text-gray-900 truncate"
//                     title={`${item.name} | ${item.model}`}
//                   >
//                     {item.name} | {item.model}
//                   </h5>
//                   <p className="text-xl font-bold text-primary mt-2">
//                     ৳ {item.price} TK
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">Loading products...</p>
//           )}
//         </div>
//       </div>
//       {/* Modal Section */}
//       {selectedProduct && (
//         <Modal
//           className="fixed inset-0 flex items-center justify-center z-50"
//           show={openModal}
//           onClose={() => setOpenModal(false)}
//         >
//           <div className="fixed inset-0 bg-black opacity-50"></div>
//           <div className="relative bg-white md:w-[800px] md:h-[600px] p-6 rounded-lg shadow-lg z-10">
//             {/* Close Button (Right Side) */}
//             <button
//               className="absolute -top-4 -right-4 w-8 h-8 rounded-full text-white bg-primary flex items-center justify-center hover:bg-primary-dark transition-all duration-300 ease-in-out"
//               onClick={() => setOpenModal(false)}
//             >
//               X
//             </button>

//             <div className="relative flex flex-col md:flex-row h-full justify-center gap-4 p-4 font-poppins">
//               <div className="relative w-full h-full md:w-1/2 p-2 flex items-center justify-center">
//                 <div className="absolute left-0 top-0 flex flex-col items-center gap-4 mb-4">
//                   <img
//                     src={selectedProduct.image}
//                     alt={`${selectedProduct.name} small 1`}
//                     className={`w-20 h-auto cursor-pointer ${
//                       activeImage === selectedProduct.image
//                         ? "border-2 border-primary"
//                         : ""
//                     }`}
//                     onClick={() => handleImageClick(selectedProduct.image)}
//                   />
//                   <img
//                     src={selectedProduct.image2}
//                     alt={`${selectedProduct.name} small 2`}
//                     className={`w-20 h-auto cursor-pointer ${
//                       activeImage === selectedProduct.image2
//                         ? "border-2 border-primary"
//                         : ""
//                     }`}
//                     onClick={() => handleImageClick(selectedProduct.image2)}
//                   />
//                   <img
//                     src={selectedProduct.image3}
//                     alt={`${selectedProduct.name} small 3`}
//                     className={`w-20 h-auto cursor-pointer ${
//                       activeImage === selectedProduct.image3
//                         ? "border-2 border-primary"
//                         : ""
//                     }`}
//                     onClick={() => handleImageClick(selectedProduct.image3)}
//                   />
//                 </div>
//                 <img
//                   src={activeImage}
//                   alt={selectedProduct.name}
//                   className="w-full h-auto ml-16 object-cover"
//                 />
//               </div>
//               <div className="w-full h-full md:w-1/2 p-2">
//                 <h2 className="text-gray-800 text-xl md:text-2xl mb-3 font-bold">
//                   {selectedProduct.name}
//                 </h2>
//                 <div className="flex items-center gap-1 mb-3">
//                   <FaStar className="text-yellow-400" />
//                   <FaStar className="text-yellow-400" />
//                   <FaStar className="text-yellow-400" />
//                   <FaStar className="text-yellow-400" />
//                   <FaRegStar className="text-yellow-400" />
//                 </div>
//                 <p className="text-xl md:text-2xl font-bold text-green-600 mb-3">
//                   ৳ {selectedProduct.price}
//                 </p>
//                 <Link
//                   to="https://www.facebook.com/wholesaleCosmeticsGallerybd"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button className="flex gap-2 justify-center items-center w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all">
//                     <FaShoppingCart />
//                     BUY NOW
//                   </button>
//                 </Link>

//                 <div className="mt-6 relative">
//                   <div className="flex justify-between items-center">
//                     <p className="text-lg md:text-xl font-bold">About</p>
//                     <button
//                       onClick={toggleDescription}
//                       className="ml-2 cursor-pointer flex items-center"
//                     >
//                       {showDescription ? (
//                         <AiOutlineUp className="ml-1" />
//                       ) : (
//                         <AiOutlineDown className="ml-1" />
//                       )}
//                     </button>
//                   </div>
//                   {showDescription && (
//                     <div>
//                       <p className="text-sm md:text-base">
//                         {selectedProduct.description}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </section>
//   );
// };

// export default Haircare;


import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import haircareCover from "../assets/cover/haircare.jpg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Haircare = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    fetch("../data/haircare.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
    setActiveImage(product.images[0]);
    setShowDescription(false);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <section className="font-poppins">
      <div className="relative w-full h-96 md:h-[50vh] overflow-hidden">
        <img
          src={haircareCover}
          alt="Makeup Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Haircare Products
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  className="w-72 h-72 mx-auto"
                />
                {/* Hover Buttons */}
                <div className="inset-x-0 bottom-0 bg-white px-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center">
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
                    title={item.name}
                  >
                    {item.name}
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
        <Modal
          className="fixed inset-0 flex items-center justify-center z-50"
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="relative bg-white md:w-[800px] md:h-[550px] p-2 rounded-lg shadow-lg z-10">
            <button
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full text-white bg-primary flex items-center justify-center hover:bg-primary-dark"
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
            <div className="md:flex h-full justify-center gap-4 p-4">
              <div className="flex flex-row md:flex-col items-center gap-4 mb-4">
                {selectedProduct.images &&
                  selectedProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProduct.name} ${index}`}
                      className={`w-20 h-auto object-cover cursor-pointer ${
                        activeImage === image
                          ? "border-2 border-primary bg-slate-50 rounded-md"
                          : ""
                      }`}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
              </div>
              <div className="shrink flex items-center p-5 justify-center">
                <img
                  src={activeImage}
                  alt={selectedProduct.name}
                  className="bg-slate-50 w-full rounded-md"
                />
              </div>
              <div className="">
                <h2 className="text-gray-800 text-xl md:text-2xl mb-3 font-bold">
                  {selectedProduct.name}
                </h2>
                <p className="text-lg md:text-xl font-bold my-2">
                  {selectedProduct.model}
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
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
                    <FaShoppingCart /> BUY NOW
                  </button>
                </Link>
                <div className="mt-6">
                  <div className="flex justify-between items-center">
                    <p className="text-lg md:text-xl font-bold">About</p>
                    <button
                      onClick={toggleDescription}
                      className="ml-2 flex items-center"
                    >
                      {showDescription ? (
                        <AiOutlineUp className="ml-1" />
                      ) : (
                        <AiOutlineDown className="ml-1" />
                      )}
                    </button>
                  </div>
                  {showDescription && (
                    <p className="text-xs md:text-base md:w-52">
                      {selectedProduct.description}
                    </p>
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

export default Haircare;

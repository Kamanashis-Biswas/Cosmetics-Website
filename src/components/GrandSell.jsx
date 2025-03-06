import { useEffect, useState } from "react";

const GrandSell = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/skincare.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded products:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-8 overflow-hidden relative">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 underline decoration-primary underline-offset-8 mb-5 decoration-[3px]">
        GRAND SELL for 10 MARCH to 30 MARCH
      </h2>

      {/* Marquee Wrapper */}
      <div className="marquee-container">
        <div className="marquee-content">
          {products.concat(products).map((product, index) =>
            product ? (
              <div key={index} className="marquee-item">
                <img src={product.image} alt={product.name} />
                <h3>
                  {product.name} | {product.model}
                </h3>
                <p className="flex items-center">
                  {/* If there is a discount price, show it */}
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
  );
};

export default GrandSell;

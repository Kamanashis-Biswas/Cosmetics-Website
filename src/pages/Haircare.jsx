import React from "react";

const Haircare = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Full-screen Hero Section with Background */}
      <div className="relative bg-green-700 text-white py-24 sm:py-32 h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold">
            Haircare Products You Can Trust
          </h1>
          <p className="mt-4 text-lg">
            Discover our premium haircare collection that will nourish, protect,
            and revitalize your hair.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Haircare Collection Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Our Haircare Collection
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              We offer a wide range of haircare products that cater to different
              hair types and needs. Whether you have curly, straight, or
              color-treated hair, we have the perfect solution for you.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🌿 **Shampoos**: Gentle formulas that cleanse and nourish your
                  hair without stripping natural oils.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  💧 **Conditioners**: Hydrating treatments to add softness and
                  shine, improving the overall health of your hair.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🌸 **Hair Masks**: Deep conditioning treatments that repair
                  and restore your hair’s strength and elasticity.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🌱 **Hair Oils & Serums**: Add shine, smoothness, and
                  nourishment to your hair with our luxurious hair oils and
                  serums.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🔥 **Styling Products**: Gels, mousses, and sprays to help you
                  style and hold your hair all day long.
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose Our Haircare Products Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Our Haircare Products?
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Our products are designed with your hair’s health in mind. Here’s
              why you should trust us with your haircare routine:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Natural Ingredients**: We use only the finest,
                  naturally-derived ingredients to nourish your hair.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Free from Harmful Chemicals**: Our formulas are free from
                  sulfates, parabens, and other harmful chemicals.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Suitable for All Hair Types**: Whether your hair is
                  curly, straight, fine, or thick, we have something for you.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Cruelty-Free**: We do not test on animals, and our
                  products are ethically sourced.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Salon-Quality Results**: Professional-grade products that
                  deliver salon-quality results at home.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Haircare;

import React from "react";

const Fragrance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Full-screen Hero Section with Background */}
      <div className="relative bg-purple-700 text-white py-24 sm:py-32 h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold">
            Explore Our Fragrance Collection
          </h1>
          <p className="mt-4 text-lg">
            Discover the perfect scent for every occasion. Browse our exclusive
            fragrance selection.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fragrance Collection Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Our Fragrance Collection
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Discover our curated fragrance collection, where each scent is
              crafted to inspire and elevate your mood. Whether you prefer a
              floral, woody, or fruity scent, we have something for everyone.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🌸 **Floral Collection**: Sweet, fresh, and romantic scents
                  perfect for spring and summer.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🌲 **Woody Collection**: Warm, earthy fragrances that evoke a
                  sense of nature and tranquility.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🍓 **Fruity Collection**: Sweet, juicy, and energizing scents
                  for those who love a burst of freshness.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🌟 **Oriental Collection**: Bold, exotic, and luxurious scents
                  for those who love deep, mysterious fragrances.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  💧 **Fresh Collection**: Clean, crisp, and refreshing
                  fragrances to give you an instant mood boost.
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose Our Fragrances Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Our Fragrances?
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Our fragrances are designed to evoke emotions and memories,
              offering high-quality, long-lasting scents. Here are just a few
              reasons why our collection stands out:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Premium Quality**: Carefully crafted with the finest
                  ingredients for a luxurious experience.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Long-lasting Scents**: Enjoy our fragrances throughout
                  the day with lasting freshness.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Unique Blends**: Exclusive and unique scent profiles that
                  stand out from the crowd.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ✅ **Eco-friendly Packaging**: Sustainable and eco-conscious
                  packaging to reduce our carbon footprint.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fragrance;

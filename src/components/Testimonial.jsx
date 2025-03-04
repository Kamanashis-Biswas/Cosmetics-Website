import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Simulating 6 testimonials by repeating the 3 testimonials
const testimonials = [
  {
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    name: "John Doe",
    designation: "CEO, CompanyX",
    comment: "This is an amazing product! I highly recommend it.",
    rating: 5,
  },
  {
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    name: "Jane Smith",
    designation: "Marketing Manager, BrandY",
    comment: "Fantastic service and quality. Will buy again!",
    rating: 4,
  },
  {
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    name: "Mike Johnson",
    designation: "CTO, TechCorp",
    comment: "Exceeded my expectations. Great experience!",
    rating: 5,
  },
  {
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    name: "John Doe",
    designation: "CEO, CompanyX",
    comment: "This is an amazing product! I highly recommend it.",
    rating: 5,
  },
  {
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    name: "Jane Smith",
    designation: "Marketing Manager, BrandY",
    comment: "Fantastic service and quality. Will buy again!",
    rating: 4,
  },
  {
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    name: "Mike Johnson",
    designation: "CTO, TechCorp",
    comment: "Exceeded my expectations. Great experience!",
    rating: 5,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Now 3 slides, each with 2 testimonials
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-28">
      <div className="text-center  mb-10">
        <h1 className="text-xl md:text-3xl underline font-bold  text-gray-800">
          PRODUCTS REVIEWS
        </h1>
      </div>
      <div className="relative max-w-screen-xl mx-auto py-10 text-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-between px-4"
            >
              {/* Render two testimonials per slide */}
              {testimonials
                .slice(index * 2, index * 2 + 2)
                .map((testimonial, i) => (
                  <div
                    key={i}
                    className="w-1/2 flex-shrink-0 flex flex-col items-center px-4"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.designation}
                    </p>
                    <p className="mt-2 text-gray-700 text-sm sm:text-base max-w-md">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-purple-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

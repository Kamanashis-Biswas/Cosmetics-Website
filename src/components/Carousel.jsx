import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../assets/Carousel/Hero1.jpg";
import img2 from "../assets/Carousel/Hero2.jpg";
import img3 from "../assets/Carousel/Hero3.jpg";
import img4 from "../assets/Carousel/Hero4.jpg";

const slides = [
  {
    src: img1,
    exploreLink: "/fragrance",
  },
  {
    src: img2,
    exploreLink: "/skincare",
  },
  {
    src: img3,
    exploreLink: "/haircare",
  },
  {
    src: img4,
    exploreLink: "/makeup",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full md:h-[600px] overflow-hidden font-poppins">
      <div
        className="flex transition-transform ease-in-out duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10">
              <a
                href={slide.exploreLink}
                className="bg-primary text-white py-2 px-2 md:px-4 rounded-md hover:bg-primary-dark text-xs md:text-lg transition-all"
              >
                Explore Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`
        ${
          index === currentIndex
            ? "px-4 py-1 rounded-full bg-primary"
            : "w-4 h-4 rounded-full bg-primary-light"
        }
      `}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

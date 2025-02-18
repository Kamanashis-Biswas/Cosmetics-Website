import Carousel from "../components/Carousel";
import OurStory from "../components/OurStory";
import ProductGrid from "../components/ProductGrid";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <ProductGrid />
      <Testimonial />
      <OurStory />
    </div>
  );
};

export default HomePage;

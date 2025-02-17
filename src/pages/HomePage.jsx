import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurStory from "../components/OurStory";
import ProductGrid from "../components/ProductGrid";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductGrid />
      <OurStory />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;

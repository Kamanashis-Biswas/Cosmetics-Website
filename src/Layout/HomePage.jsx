import Carousel from "../components/Carousel";
import OurStory from "../components/OurStory";
import SkincareFeatureProduct from "../components/SkincareFeatureProduct";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <SkincareFeatureProduct />
      <Testimonial />
      <OurStory />
    </div>
  );
};

export default HomePage;

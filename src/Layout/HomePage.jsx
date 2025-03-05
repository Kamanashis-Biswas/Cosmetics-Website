import Carousel from "../components/Carousel";
import FragranceFeatureProduct from "../components/FragranceFeatureProduct";
import HaircareFeatureProduct from "../components/HaircareFeatureProduct";
import OurStory from "../components/OurStory";
import SkincareFeatureProduct from "../components/SkincareFeatureProduct";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <SkincareFeatureProduct />
      <HaircareFeatureProduct />
      <FragranceFeatureProduct />
      <Testimonial />
      <OurStory />
    </div>
  );
};

export default HomePage;

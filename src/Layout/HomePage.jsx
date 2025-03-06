import Carousel from "../components/Carousel";
import FragranceFeatureProduct from "../components/FragranceFeatureProduct";
import HaircareFeatureProduct from "../components/HaircareFeatureProduct";
import MakeupFeatureProduct from "../components/MakeupFeatureProduct";
import OurStory from "../components/OurStory";
import PaymentMethod from "../components/PaymentMethod";
import SkincareFeatureProduct from "../components/SkincareFeatureProduct";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <SkincareFeatureProduct />
      <MakeupFeatureProduct />
      <HaircareFeatureProduct />
      <FragranceFeatureProduct />
      <Testimonial />
      <OurStory />
      <PaymentMethod />
    </div>
  );
};

export default HomePage;

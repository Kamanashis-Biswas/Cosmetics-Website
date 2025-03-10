import Carousel from "../components/Carousel";
import FragranceFeatureProduct from "../components/FragranceFeatureProduct";
import GrandSell from "../components/GrandSell";
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
      <GrandSell />
      <SkincareFeatureProduct />
      <MakeupFeatureProduct />
      <HaircareFeatureProduct />
      <FragranceFeatureProduct />
      {/* <Testimonial /> */}
      {/* <OurStory /> */}
      <PaymentMethod />
    </div>
  );
};

export default HomePage;

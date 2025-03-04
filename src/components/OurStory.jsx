import img1 from "../assets/img1.jpg";

const OurStory = () => {
  return (
    <section className="bg-gray-700 mt-16 text-white flex flex-col md:flex-row items-center justify-center p-10">
      <div className="w-full md:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-2 md:p-8 animate-fadeInLeft">
          <h2 className="text-2xl font-bold mb-4">OUR STORY</h2>
          <p className="mb-4">
            Welcome to Australia’s first beauty concept store and Melbourne’s
            premium beauty and wellness destination.
          </p>
          <p className="mb-4">
            Curating the best of International and Australian beauty; experience
            the wanderlust of a collection of brands from Copenhagen to
            California, skincare lines at the peak of innovation, thoughtfully
            formulated products using the finest ingredients and a welcoming
            space that offers knowledge, guidance and inclusively.
          </p>
          <p className="mb-4">
            We carry an unparalleled edit of conscious beauty brands, including
            a wide collection of 100% natural skincare, makeup, and body care,
            as well as that beauty game-changer that’s just been discovered.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fadeInRight">
          <img
            src={img1}
            alt="Our Story"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;

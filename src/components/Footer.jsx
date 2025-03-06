import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="bg-black text-white font-poppins py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div>
                <h2 className="text-primary font-bold text-2xl">
                  Shoppers&apos;perk International
                </h2>
                <p className="mt-3 text-gray-300 max-w-md text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, voluptas. Nam totam magni unde ullam iure omnis
                  nobis itaque aliquid. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum unde voluptatum, eos harum adipisci
                  doloremque iure. Aspernatur nisi nesciunt et.
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png"
                      alt="BD Flag"
                    />
                  </div>
                  <p>Bangladesh</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/1200px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                      alt="USA Flag"
                    />
                  </div>
                  <p>United States</p>
                </div>
              </div>
            </div>

            {/* Social Media Links (Right Side) */}
            <div className="flex flex-col items-center md:items-end">
              <div>
                <h2 className="text-lg font-semibold md:mr-9 mb-2">
                  Follow Us:
                </h2>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="https://www.facebook.com/wholesaleCosmeticsGallerybd"
                  className="hover:text-gray-400 transition duration-300 hover:scale-125 text-3xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://x.com/maccosmetics"
                  className="hover:text-gray-400 transition duration-300 hover:scale-125 text-3xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube />
                </Link>
                <Link
                  to="https://x.com/maccosmetics"
                  className="hover:text-gray-400 transition duration-300 hover:scale-125 text-3xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            © 2025 Shoppers&apos;Perk. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

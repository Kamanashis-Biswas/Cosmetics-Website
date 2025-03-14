import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import payment1 from "../assets/payment/cod.png";
import payment2 from "../assets/payment/bkash.png";
import payment3 from "../assets/payment/dbbl.png";
import payment4 from "../assets/payment/master.png";
import payment5 from "../assets/payment/nagad.png";
import payment6 from "../assets/payment/rocket.png";
import payment7 from "../assets/payment/visa.png";

const Footer = () => {
  const paymentMethods = [
    { id: 1, src: payment1, alt: "Cash on Delivery" },
    { id: 2, src: payment2, alt: "Bkash" },
    { id: 3, src: payment3, alt: "DBBL" },
    { id: 4, src: payment4, alt: "Mastercard" },
    { id: 5, src: payment5, alt: "Nagad" },
    { id: 6, src: payment6, alt: "Rocket" },
    { id: 7, src: payment7, alt: "Visa" },
  ];

  return (
    <div>
      <footer className="bg-black text-white font-poppins py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div>
                <h2 className="text-primary font-bold text-2xl">
                  Shoppers&apos;perk International
                </h2>
                <p className="mt-3 text-gray-300 max-w-md text-center md:text-left">
                  We offer excellent value to our customers by bringing them
                  high quality & original brand products from UK, USA & Around
                  the world at competitive prices.
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
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                    />
                  </div>
                  <p>United Kingdom</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h2 className="  text-lg font-semibold mb-2 text-center md:text-end">
                  Payment Methods
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {paymentMethods.map((method) => (
                    <img
                      key={method.id}
                      src={method.src}
                      alt={method.alt}
                      className="w-16 h-7"
                    />
                  ))}
                </div>
              </div>
              {/* Social Media Links (Right Side) */}
              <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                </div>
                <div className="flex space-x-4">
                  <Link
                    to="https://www.facebook.com/shoppersperk"
                    className="text-blue-500 hover:text-blue-700 transition duration-300 hover:scale-105 text-3xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    to="https://www.instagram.com/shoppers.perk/"
                    className="text-pink-400 hover:text-pink-600 transition duration-300 text-3xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram />
                  </Link>
                </div>
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

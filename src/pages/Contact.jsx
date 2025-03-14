import { useEffect } from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { CiPhone, CiShop } from "react-icons/ci";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component is rendered
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow container mx-auto px-4 py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-3 md:p-10 bg-purple-100 rounded-lg items-center font-poppins ">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
              <h2 className="font-bold text-xl">Phone</h2>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex gap-3 mb-4">
                    <CiPhone className="text-slate-900 font-medium w-6 h-6" />
                    <p>+8801780-390222</p>
                  </div>
                  <div className="flex gap-3">
                    <FaWhatsapp className="text-green-500 font-bold w-6 h-6" />
                    <p>+8801780-390222</p>
                  </div>
                </div>
                <div>
                  <Link
                    to="https://www.facebook.com/shoppersperk"
                    className="hover:text-primary-dark w-8 transition duration-300 hover:scale-125 text-3xl"
                    target="_blank"
                  >
                    <FaFacebook className="mb-3 text-blue-500 hover:text-blue-700 transition duration-300 hover:scale-105" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/shoppers.perk/"
                    className="hover:text-primary-dark  w-8 transition duration-300 hover:scale-125 text-3xl"
                    target="_blank"
                  >
                    <BsInstagram className="text-pink-600 hover:text-pink-800 transition duration-300 hover:scale-105" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg mt-10 dark:bg-gray-800 dark:text-white">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="bg-purple-100/20 border border-slate-200 shadow-xl rounded-md p-4">
                  <div className="flex items-center justify-start gap-2 mb-3">
                    <CiShop className="w-8 h-8 font-extrabold text-primary" />
                    <h3 className="font-medium">Shop - 1</h3>
                  </div>
                  <h2 className="font-bold text-lg rounded-md mb-4">
                    Shoppers&apos; perk
                  </h2>
                  <div className="flex gap-3 items-center">
                    <FaLocationDot className="text-slate-900 w-6 h-6" />
                    <div>
                      <p>
                        <span className="font-semibold mr-1">Shop: 222,</span>
                        Genetic Plaza,
                      </p>
                      <p>Dhanmondi-27, DHAKA</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-100/20 border border-slate-200 shadow-xl rounded-md p-4">
                  <div className="flex items-center justify-start gap-2 mb-3">
                    <CiShop className="w-8 h-8 font-extrabold text-primary" />
                    <h3 className="font-medium">Shop - 2</h3>
                  </div>
                  <h2 className="font-bold text-lg whitespace-nowrap mb-4">
                    Shoppers&apos; perk life style
                  </h2>
                  <div className="flex gap-3 items-center">
                    <FaLocationDot className="text-slate-900 w-6 h-6" />
                    <div>
                      <p>
                        <span className="font-semibold mr-1">Shop: 137,</span>
                        Genetic Plaza,
                      </p>
                      <p>Dhanmondi-27, DHAKA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="relative w-full h-96 overflow-hidden rounded-lg">
              <iframe
                title="Google Map Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.37401225266!2d90.38867669999999!3d23.876352699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c500171fe615%3A0x98b4beb9bb3b3103!2sShoppers&#39;%20Perk!5e0!3m2!1sen!2sbd!4v1741633361074!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

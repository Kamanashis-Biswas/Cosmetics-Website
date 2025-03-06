import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaHeadphones, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow container mx-auto px-4 py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-3 md:p-10 bg-purple-200 rounded-lg font-poppins items-stretch">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
              <h2 className="font-bold text-xl">Phone & Email</h2>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex gap-3 mb-4">
                    <FaHeadphones className="text-purple-500" />
                    <p>+880##########</p>
                  </div>
                  <div className="flex gap-3">
                    <FaHeadphones className="text-purple-500" />
                    <p>+880##########</p>
                  </div>
                </div>
                <div>
                  <Link
                    to="https://x.com/maccosmetics"
                    className="hover:text-blue-600 w-8 transition duration-300 hover:scale-125 text-3xl"
                    target="_blank"
                  >
                    <FaFacebook className="mb-3" />
                  </Link>
                  <Link
                    to="https://x.com/maccosmetics"
                    className="hover:text-blue-600 w-8 transition duration-300 hover:scale-125 text-3xl"
                    target="_blank"
                  >
                    <BsYoutube className="mb-3" />
                  </Link>
                  <Link
                    to="https://x.com/maccosmetics"
                    className="hover:text-blue-600  w-8 transition duration-300 hover:scale-125 text-3xl"
                    target="_blank"
                  >
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg mt-10 dark:bg-gray-800 dark:text-white">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="bg-purple-100/20 p-4">
                  <h2 className="font-bold text-xl rounded-md mb-4">
                    Address,Shop 1
                  </h2>
                  <div className="flex gap-3 items-center">
                    <FaLocationDot className="text-purple-500" />
                    <p>123, Dhaka Bangladesh</p>
                  </div>
                </div>
                <div className="bg-purple-100/20 rounded-md p-4">
                  <h2 className="font-bold text-xl mb-4">Address,Shop 2</h2>
                  <div className="flex gap-3 items-center">
                    <FaLocationDot className="text-purple-500" />
                    <p>123, Dhaka Bangladesh</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7670886756131!2d90.42468747564254!3d23.780580122466443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7914cd6e563%3A0x30348126bb9531ab!2sYummy%20Sweets%20%26%20Bakery!5e0!3m2!1sen!2sbd!4v1739905673179!5m2!1sen!2sbd"
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

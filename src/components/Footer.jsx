const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and About */}
            <div className="transition duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold text-white">YourBrand</h2>
              <p className="mt-3 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, voluptate. Nam totam magnam unde ullam iure omnis
                nobis itaque aliquam.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-8">
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 hover:scale-110"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 hover:scale-110"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 hover:scale-110"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 hover:scale-110"
              >
                Contact
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 justify-center md:justify-end">
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 hover:scale-125"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7.75c-.69 0-1.25-.56-1.25-1.25S9.31 6.75 10 6.75s1.25.56 1.25 1.25S10.69 9.25 10 9.25zm7 7.75h-2v-3.5c0-2.5-3-2.3-3 0v3.5h-2v-6h2v.79c.93-1.66 4-1.79 4 1.56V17z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300 hover:scale-125"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69.88-.53 1.56-1.37 1.88-2.37-.82.49-1.73.84-2.7 1.03a4.19 4.19 0 0 0-7.14 3.82c-3.47-.17-6.56-1.84-8.63-4.36a4.17 4.17 0 0 0-.56 2.1c0 1.44.74 2.71 1.85 3.45a4.21 4.21 0 0 1-1.89-.52v.05c0 2 1.4 3.67 3.27 4.05a4.23 4.23 0 0 1-1.88.07 4.19 4.19 0 0 0 3.91 2.91A8.42 8.42 0 0 1 2 18.57a11.87 11.87 0 0 0 6.29 1.85c7.54 0 11.67-6.26 11.67-11.67 0-.18-.01-.36-.02-.53A8.42 8.42 0 0 0 22.46 6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="mt-12 md:col-span-3 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex justify-center items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Additional Links */}
          <div className="mt-8">
            <ul className="flex justify-center space-x-8 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            © 2025 YourBrand. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

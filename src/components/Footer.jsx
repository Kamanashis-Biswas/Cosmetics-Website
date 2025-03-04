import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo-2.png";

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Logo and About */}
            <div className="transition duration-300 hover:scale-105">
              <img className="w-16 md:w-24" src={logo} />

              <p className="mt-3 text-gray-300">
                Lorem ipsum dolor sit abet consectetur adipisicing elia. Pariah,
                volute. Nam totem magnum undo ulema ire ornis nobs ibague
                aliquot. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsum unde voluptatum, eos harum adipisci doloremque iure.
                Aspernatur nisi nesciunt et.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 justify-center md:justify-end">
              <Link
                to="https://www.facebook.com/wholesaleCosmeticsGallerybd"
                className="hover:text-gray-400 w-8 transition duration-300 hover:scale-125 text-3xl"
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://x.com/maccosmetics"
                className="hover:text-gray-400 w-8 transition duration-300 hover:scale-125 text-3xl"
                target="_blank"
              >
                <BsTwitterX />
              </Link>
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

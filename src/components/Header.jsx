import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-black py-2 px-4 flex justify-between items-center">
        <marquee className="xl:w-3/4 mx-auto text-white">
          FREE AU EXPRESS SHIPPING OVER $120 AND FREE SAMPLES WITH ALL ORDERS
        </marquee>
      </div>

      <nav className="bg-blue-600 text-white px-4 py-5 flex justify-between items-center">
        <div className="w-3/4 mx-auto flex">
          <ul className="hidden md:flex space-x-44 mx-auto lin">
            <li className="hover:text-gray-200 cursor-pointer">SKINCARE</li>
            <li className="hover:text-gray-200 cursor-pointer">MAKEUP</li>
            <li className="hover:text-gray-200 cursor-pointer">HAIRCARE</li>
            <li className="hover:text-gray-200 cursor-pointer">FRAGRANCE</li>
          </ul>
        </div>

        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes size={24} onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars size={24} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>

      {menuOpen && (
        <ul className="md:hidden bg-blue-600 text-white py-2 text-center">
          <li className="py-2 border-b border-white cursor-pointer">
            SKINCARE
          </li>
          <li className="py-2 border-b border-white cursor-pointer">MAKEUP</li>
          <li className="py-2 border-b border-white cursor-pointer">
            HAIRCARE
          </li>
          <li className="py-2 border-b border-white cursor-pointer">
            FRAGRANCE
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;

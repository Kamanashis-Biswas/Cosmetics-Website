import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      {/* Announcement Bar - Fixed at the top */}
      <div className="bg-black py-2 flex justify-between items-center font-poppins mx-auto text-white text-base">
        <marquee className="max-w-screen-xl font-semibold mx-auto text-white">
          Shoppers&apos; perk & Shoppers&apos; perk life style
        </marquee>
      </div>

      {/* Main content (Header) below the fixed announcement bar */}
      <nav className="bg-white border-gray-200 -mt-2 dark:bg-gray-900 dark:border-gray-700 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <NavLink
            className="flex items-center space-x-3 rtl:space-x-reverse"
            to="/"
          >
            <img className="w-16 md:w-24" src={logo} />
          </NavLink>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-bold font-poppins p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-primary underline decoration-primary underline-offset-8 decoration-[2px]"
                      : "block py-2 px-3 text-gray-900 hover:text-primary-dark"
                  }
                  aria-current="page"
                >
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/skincare"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-primary underline decoration-primary underline-offset-8 decoration-[2px]"
                      : "block py-2 px-3 text-gray-900 hover:text-primary-dark"
                  }
                  aria-current="page"
                >
                  SKINCARE
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/makeup"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-primary underline decoration-primary underline-offset-8 decoration-[2px]"
                      : "block py-2 px-3 text-gray-900 hover:text-primary-dark"
                  }
                  aria-current="page"
                >
                  MAKEUP
                </NavLink>
              </li>

              {/* Other Navbar Links */}
              <li>
                <NavLink
                  to="/haircare"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-primary underline decoration-primary underline-offset-8 decoration-[2px]"
                      : "block py-2 px-3 text-gray-900 hover:text-primary-dark"
                  }
                  aria-current="page"
                >
                  HAIRCARE
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fragrance"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-primary underline decoration-primary underline-offset-8 decoration-[2px]"
                      : "block py-2 px-3 text-gray-900 hover:text-primary-dark"
                  }
                  aria-current="page"
                >
                  FRAGRANCE
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-primary underline decoration-primary underline-offset-8 decoration-[2px]"
                      : "block py-2 px-3 text-gray-900 hover:text-primary-dark"
                  }
                  aria-current="page"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

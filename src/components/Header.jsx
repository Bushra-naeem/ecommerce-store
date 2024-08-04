import React, { useRef, useState, useContext } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import MobileIcons from "./MobileIcons";
import "./custom.css";

const Header = () => {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { product_list, cartItems, query, setQuery, handleSearch } =
    useContext(ProductContext);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="z-[9999] fixed w-full h-20 bg-gray-900 text-white flex justify-between items-center py-4 px-4 md:px-6 lg:px-6 shadow-xl border-b border-gray-900">
        <div className="">
          <div className="md:w-1/2">
            <a
              href="/"
              className="text-white no-underline text-2xl lg:text-4xl font-bold lg:ml-5"
            >
              Shopix
            </a>
          </div>
          <button
            className="absolute top-5 right-4 text-3xl p-1 cursor-pointer bg-transparent border-none outline-none text-white md:hidden"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </button>
        </div>

        <nav ref={navRef} className="w-1/2 flex justify-end md:gap-3 lg:gap-8">
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Search Product..."
              value={query}
              className="md:pr-6 md:pl-3 md:py-1 lg:pr-20 lg:pl-6 lg:py-3 rounded-full bg-zinc-700 text-white outline-none"
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <FaSearch
              className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-xl cursor-pointer"
              onClick={handleSearch}
            />
          </div>
          <div className="hidden md:flex items-center md:space-x-4 lg:space-x-5 md:text-lg lg:text-xl font-semibold">
            <Link
              to="/cart"
              className="flex items-center text-white no-underline relative"
            >
              <IoCartOutline className="mr-1 md:text-2xl lg:text-3xl font-bold" />
              Cart
              {cartItems.length > 0 && (
                <span
                  className="absolute bottom-4 right-0 bg-red-500 text-white rounded-full
                   h-6 w-6 flex items-center justify-center text-xs"
                >
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link to="" className="text-white no-underline">
              SignUp
            </Link>
            <span className="h-1/2 border-r border-white px-0.5"></span>
            <Link to="" className="text-white no-underline">
              LogIn
            </Link>
          </div>
        </nav>
        <nav
          ref={navRef}
          className={`absolute top-0 left-0 h-screen overflow-auto bg-gray-800 font-semibold flex flex-col items-start px-2 md:px-4 ${
            isMobileMenuOpen ? "block custom-width md:w-[300px]" : "hidden"
          }`}
        >
          <div className="flex justify-end w-full pt-10 pb-6 px-1 mb-4 border-b border-gray-300">
            <FaTimes className="mr-1 text-white" onClick={handleCloseMenu} />
          </div>
          <Link to="/" className="no-underline w-full">
            <li
              className="list-none my-3 ml-3 text-white"
              onClick={handleCloseMenu}
            >
              Home
            </li>
          </Link>
          <div className="ml-3 text-lg font-bold">Categories</div>
          <Link
            to="/mens"
            className="border-b w-full border-gray-500 no-underline"
          >
            <li
              className="list-none my-3 ml-3 text-white"
              onClick={handleCloseMenu}
            >
              Men
            </li>
          </Link>
          <Link to="/womens" className="no-underline w-full">
            <li
              className="list-none my-3 ml-3 text-white"
              onClick={handleCloseMenu}
            >
              Women
            </li>
          </Link>
        </nav>
      </div>
      <MobileIcons hidden={isMobileMenuOpen} />
    </header>
  );
};

export default Header;

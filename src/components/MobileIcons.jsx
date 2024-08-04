import React, { useContext } from "react";
import { FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { ProductContext } from "../Context/ProductContext";

const MobileIcons = ({ hidden, toggleSearchBar }) => {
  const { cartItems } = useContext(ProductContext);

  return (
    <div
      className={`z-50 fixed bottom-0 left-0 w-full bg-gray-900 text-white opacity-100 flex items-center justify-between py-3 px-8 sm:hidden ${
        hidden ? "hidden" : ""
      }`}
    >
      <a href="/" className="flex flex-col items-center no-underline">
        <FaHome className="mb-1 text-white text-xl" />
        <span className="text-white">Home</span>
      </a>
      <a href="/search" className="flex flex-col items-center no-underline">
        <FaSearch className="mb-1 text-white text-xl" />
        <span className="text-white">Search</span>
      </a>
      <a href="/cart" className="flex flex-col items-center no-underline">
        <FaShoppingCart className="mb-1 text-white text-xl" />
        <span className="text-white">
          {cartItems.length > 0 && (
            <span
              className="absolute top-1 ml-3 bg-red-500 text-white rounded-full
                   h-5 w-5 flex items-center justify-center text-xs"
            >
              {cartItems.length}
            </span>
          )}
          Cart
        </span>
      </a>
      <a href="/" className="flex flex-col items-center no-underline">
        <FaUser className="mb-1 text-white text-xl" />
        <span className="text-white">Profile</span>
      </a>
    </div>
  );
};

export default MobileIcons;

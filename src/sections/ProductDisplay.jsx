import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItems, removeFromCart } = useContext(ProductContext);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 1;
  const isRemoveDisabled = quantity === 1;

  return (
    <div
      className="bg-gray-900 flex flex-col sm:flex-row sm:gap-5 w-full h-4/5
    text-xs sm:text-base pl-3 pr-3 md:pl-5 md:pr-5 lg:pl-12 lg:pr-12 pt-32 pb-8"
    >
      <div className="w-full sm:w-1/2 object-contain">
        <img src={product.image} alt="" className="w-full h-72 sm:h-[600px]" />
      </div>

      <div className="sm:w-1/2 space-y-4 md:space-y-7 md:pr-8">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
          {product.heading}
        </h1>
        <p className="text-red-600 font-semibold text-xl md:text-2xl lg:text-3xl">
          {product.price}
        </p>
        <p className="text-gray-600 text-lg md:text-xl">
          Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
          Mauris consequat ornare feugiat.
        </p>
        <div className="flex gap-3 sm:gap-8">
          <div className="flex gap-4 text-white">
            <p
              className="text-3xl font-semibold block bg-gray-600 text-center cursor-pointer h-10 w-10"
              onClick={() => {
                if (!isRemoveDisabled) {
                  removeFromCart(product);
                }
              }}
            >
              -
            </p>
            <p className="text-2xl inline">{quantity}</p>
            <p
              className="text-3xl block font-semibold bg-gray-600 text-center cursor-pointer h-10 w-10"
              onClick={() => addToCart(product)}
            >
              +
            </p>
          </div>

          <button
            className="text-white font-semibold mb-4 text-sm md:text-base lg:text-xl py-2 lg:py-5 px-6 lg:px-14 bg-red-600 rounded-full"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

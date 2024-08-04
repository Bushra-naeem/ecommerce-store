import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, getTotalCart } =
    useContext(ProductContext);

  const formatPrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  const navigate = useNavigate();
  const navigateToCheckoutForm = () => {
    navigate("/checkoutform");
  };

  return (
    <div
      className="bg-gray-900 text-white"
      style={{
        paddingTop: 130,
        paddingBottom: 200,
      }}
    >
      <div className="grid mx-auto md:px-32 xl:px-96 gap-2">
        <div className="md:col-span-2 w-full bg-gray-800 pr-6 rounded-md">
          <h2 className="font-bold p-4 text-white text-2xl md:text-3xl lg:text-4xl">
            YOUR CART
          </h2>
          <hr className="border-gray-300 mt-2 mb-8" />
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => {
                const price = formatPrice(item.price);
                const totalPrice = price * item.quantity;

                return (
                  <div key={item.id} className="mb-3">
                    <div className="grid grid-cols-3 items-center gap-2">
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="w-36 h-36 shrink-0 py-2 rounded-md">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h1 className="text-base sm:text-xl font-semibold">
                            {item.heading}
                          </h1>
                          <button
                            className="text-start text-lg md:text-xl cursor-pointer text-red-600"
                            onClick={() => {
                              removeFromCart(item);
                            }}
                          >
                            Delete
                          </button>

                          <div className="flex gap-4 mt-2">
                            <div className="flex gap-3">
                              <button
                                className="px-3 py-1 bg-gray-600 text-lg text-white rounded-md outline-none"
                                onClick={() => {
                                  if (item.quantity !== 1) {
                                    removeFromCart(item);
                                  }
                                }}
                              >
                                -
                              </button>
                              <p className="block mb-2 text-xl">
                                {item.quantity}
                              </p>
                              <button
                                className="px-3 py-1 bg-gray-600 text-lg text-white rounded-md outline-none "
                                onClick={() => {
                                  addToCart(item);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <CurrencyFormat
                          value={totalPrice}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"P"}
                          renderText={(value) => (
                            <p className="text-xl sm:text-2xl text-red-600">
                              {value}
                            </p>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-end gap-14">
                <h3 className="text-xl sm:text-2xl">Sub Total</h3>
                <CurrencyFormat
                  value={getTotalCart()}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"P"}
                  renderText={(value) => (
                    <p className="text-xl sm:text-2xl text-red-600 font-semibold">
                      {value}
                    </p>
                  )}
                />
              </div>
              <div className="flex justify-end pt-2 pb-4">
                <button
                  className="bg-zinc-800 px-8 py-2 text-2xl"
                  onClick={navigateToCheckoutForm}
                >
                  Check out
                </button>
              </div>
            </>
          ) : (
            <div className="text-center pt-8 pb-8">
              <div className="text-xl md:text-2xl lg:text-3xl">
                Your cart is empty:(
              </div>
              <div className="pt-8">
                <a href="/">
                  <button className="bg-zinc-800 text-white px-6 py-2 text-2xl rounded">
                    Go Shop Now
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

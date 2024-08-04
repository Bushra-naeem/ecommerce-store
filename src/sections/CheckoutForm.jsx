import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import CurrencyFormat from "react-currency-format";

const CheckoutForm = () => {
  const { getTotalCart } = useContext(ProductContext);
  return (
    <div
      class="grid place-content-center bg-gray-900 pt-28 sm:pt-36 pb-28
     text-gray-400 px-4"
    >
      <p class="text-3xl font-bold">Payment Details</p>
      <p class="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div class="">
        <label for="email" class="mt-4 mb-2 block text-2xl font-semibold">
          Email
        </label>
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10"
            placeholder="Your email address."
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
        </div>
        <label for="card-holder" class="mt-4 mb-2 block text-2xl font-semibold">
          Card Holder
        </label>
        <div class="relative">
          <input
            type="text"
            id="card-holder"
            name="card-holder"
            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10"
            placeholder="Your full name here"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
        </div>
        <label for="card-no" class="mt-4 mb-2 block text-2xl font-semibold">
          Card Details
        </label>
        <div class="flex">
          <div class="relative w-7/12 flex-shrink-0">
            <input
              type="text"
              id="card-no"
              name="card-no"
              class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10"
              placeholder="xxxx-xxxx-xxxx-xxxx"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
          </div>
          <input
            type="text"
            name="credit-expiry"
            class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10"
            placeholder="MM/YY"
          />
          <input
            type="text"
            name="credit-cvc"
            class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10"
            placeholder="CVC"
          />
        </div>
        <label
          for="billing-address"
          class="mt-4 mb-2 block text-2xl font-semibold"
        >
          Billing Address
        </label>
        <div class="flex flex-col sm:flex-row">
          <div class="relative flex-shrink-0 sm:w-7/12">
            <input
              type="text"
              id="billing-address"
              name="billing-address"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm 
              shadow-sm outline-none focus:z-10"
              placeholder="Street Address"
            />
          </div>
          <input
            name="billing-state"
            className="w-full rounded-md border border-gray-300 text-gray-400 px-4 py-3 text-sm shadow-sm outline-none"
            placeholder="State"
          ></input>

          <input
            type="text"
            name="billing-zip"
            class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10"
            placeholder="ZIP"
          />
        </div>

        {/* <!-- Total --> */}
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-2xl font-semibold text-white">Subtotal</p>
            <CurrencyFormat
              value={getTotalCart()}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"P"}
              renderText={(value) => (
                <p className="text-white text-2xl font-semibold">{value}</p>
              )}
            />
          </div>
          <div class="flex items-center justify-between">
            <p class="text-2xl font-semibold text-white">Shipping</p>
            <p class="font-semibold text-xl text-white">P8.00</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-2xl font-semibold text-white">Total</p>
          <CurrencyFormat
            value={getTotalCart()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"P"}
            renderText={(value) => (
              <p className="text-red-600 text-2xl font-semibold">{value + 8}</p>
            )}
          />
        </div>
      </div>
      <button class="mt-4 mb-8 w-full rounded-md bg-zinc-600 px-6 py-3 font-semibold text-white">
        Place Order
      </button>
    </div>
  );
};

export default CheckoutForm;

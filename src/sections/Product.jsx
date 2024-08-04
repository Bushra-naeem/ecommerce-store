import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import womenImg from "../assets/images/womenImg.webp";
import menImg from "../assets/images/manImg.webp";
import { product_list } from "../assets/assets";
import ProductItem from "./ProductItem";

const Product = () => {
  const navigate = useNavigate();

  const navigateToWomenSection = () => {
    navigate("/womens");
  };

  const navigateToMenSection = () => {
    navigate("/mens");
  };

  const [noOfElelment, setNoOfElement] = useState(12);
  const loadMore = () => {
    const remainingElements = product_list.length - noOfElelment;
    setNoOfElement(noOfElelment + remainingElements);
  };
  const slice = product_list.slice(0, noOfElelment);
  const allProductsLoaded = noOfElelment >= product_list.length;

  return (
    <section className="box-border bg-gray-900">
      <div className="pl-3 sm:pl-12 pr-3 sm:pr-12">
        <h2 className="font-bold pt-4 text-white text-2xl sm:text-3xl">
          CATEGORIES
        </h2>
        <div className="flex flex-col sm:flex-row p-0 gap-4 md:gap-7 py-3">
          <div
            className="relative w-full sm:w-1/2 cursor-pointer"
            onClick={navigateToWomenSection}
          >
            <img
              src={womenImg}
              alt="Women"
              className="h-4/5 md:h-5/6 lg:h-full w-full object-cover"
            />
            <h2 className="absolute top-16 left-6 text-black text-xl font-bold md:text-2xl lg:text-3xl">
              WOMEN
            </h2>
          </div>
          <div
            className="relative w-full sm:w-1/2 cursor-pointer"
            onClick={navigateToMenSection}
          >
            <img
              src={menImg}
              alt="Men"
              className="h-4/5 md:h-5/6 lg:h-full w-full object-cover"
            />
            <h2 className="absolute top-16 left-6 text-black text-xl font-bold md:text-2xl lg:text-3xl">
              MEN
            </h2>
          </div>
        </div>
      </div>
      <div className="pl-3 sm:pl-12 pr-3 sm:pr-12">
        <h2 className="font-bold justify-start pt-4 pb-3 text-white text-2xl sm:text-3xl">
          PRODUCT OVERVIEW
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slice.map((item, index) => {
            return (
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                heading={item.heading}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center pt-16 pb-48">
        {allProductsLoaded ? (
          <span className="text-red-500 text-xs sm:text-xl">
            No more products.You have reached the end.
          </span>
        ) : (
          <button
            className="text-red-600 bg-white border-2 border-red-500 rounded-full px-8 md:px-10 lg:px-16 
            py-2"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Product;

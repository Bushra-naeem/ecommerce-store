import React from "react";
import ProductItem from "./ProductItem";
import { product_list } from "../assets/assets";

const RelatedProducts = ({ currentProductId, currentCategory }) => {
  const relatedProducts = product_list
    .filter(
      (item) =>
        item.id !== currentProductId && item.category === currentCategory
    )
    .slice(0, 8);

  return (
    <div className="bg-gray-900 pl-3 pr-3 md:pl-5 md:pr-5 lg:pl-12 lg:pr-12 pb-32">
      <h2 className="font-bold justify-start text-white text-2xl sm:text-3xl mb-4">
        RELATED PRODUCTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {relatedProducts.map((item, index) => {
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
  );
};

export default RelatedProducts;

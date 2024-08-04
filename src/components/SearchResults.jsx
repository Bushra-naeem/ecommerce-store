import React from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "../sections/ProductItem";
import ProductCategory from "../sections/ProductCategory";
import CategoryButtons from "../sections/CategoryButtons";

const SearchResults = () => {
  const location = useLocation();
  const { filteredProducts, query } = location.state;

  return (
    <div className="bg-gray-900 pl-4 pr-4 sm:pl-12 sm:pr-12">
      {filteredProducts.length > 0 ? (
        <>
          <div className="pt-32 pb-8">
            <CategoryButtons />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4 pb-60">
            {filteredProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                heading={item.heading}
                price={item.price}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-xl text-center pt-[130px] pb-[600px] text-white">
          No products found.
        </div>
      )}
    </div>
  );
};

export default SearchResults;

import React, { useContext } from "react";
import ProductCategory from "../sections/ProductCategory";
import { product_list } from "../assets/assets";
import ProductItem from "../sections/ProductItem";
import { FaSearch } from "react-icons/fa";
import { ProductContext } from "../Context/ProductContext";
import CategoryButtons from "../sections/CategoryButtons";

const Search = () => {
  const { query, setQuery, handleSearch } = useContext(ProductContext);
  return (
    <div className="bg-gray-900 pt-20">
      <div className=" bg-white mx-3 px-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Product..."
            value={query}
            className="pr-12 pl-6 py-2.5 my-2.5 w-full rounded-full bg-zinc-700 bg-red outline-none text-white"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <FaSearch
            className="absolute top-5 right-4 text-white text-xl cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="pt-8 pb-8">
        <CategoryButtons />
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-900 px-3 
       gap-3 pb-28"
      >
        {product_list.map((item, index) => {
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

export default Search;

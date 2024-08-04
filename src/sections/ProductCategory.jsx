import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductItem from "./ProductItem";
import CategoryButtons from "./CategoryButtons";

const ProductCategory = ({ category }) => {
  const [product, setProduct] = useState("null");
  const { product_list } = useContext(ProductContext);

  const filteredProducts = product_list.filter(
    (product) => product.category === category
  );

  return (
    <>
      <div className="bg-gray-900 pl-3 sm:pl-12 pr-3 sm:pr-12 pt-28 md:pt-32">
        <div>
          <CategoryButtons />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-3 pt-8 pb-28">
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
      </div>
    </>
  );
};

export default ProductCategory;

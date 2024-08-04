import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="w-full flex flex-col">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          className="w-full h-48 md:h-72 lg:h-80 mb-2 md:mb-4"
          src={props.image}
          alt=""
        />
      </Link>
      <h2 className="text-white font-semibold text-sm sm:text-xl ml-3 mb-1">
        {props.heading}
      </h2>
      <p className="text-red-600 font-semibold text-sm sm:text-xl ml-3 mb-1 md:mb-4">
        {props.price}
      </p>
    </div>
  );
};

export default ProductItem;

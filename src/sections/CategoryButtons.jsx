import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryButtons = () => {
  const [product, setProduct] = useState("null");

  return (
    <div>
      <div className="flex gap-3 ml-5">
        <Link
          to="/mens"
          className="px-8 md:px-14 py-2 md:py-3 bg-zinc-700 rounded-lg text-xl md:text-2xl text-white no-underline font-semibold flex items-center justify-center hover:bg-red-600"
          onClick={() => {
            setProduct("mens");
          }}
        >
          Men
        </Link>
        <Link
          to="/womens"
          className="px-8 md:px-14 py-2 md:py-3 bg-zinc-700 rounded-lg text-xl md:text-2xl  text-white no-underline font-semibold flex items-center justify-center hover:bg-red-600"
          onClick={() => {
            setProduct("womens");
          }}
        >
          Women
        </Link>
      </div>
    </div>
  );
};

export default CategoryButtons;

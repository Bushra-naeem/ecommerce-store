import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  const { product_list } = useContext(ProductContext);
  const { productId } = useParams();
  const product = product_list.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDisplay product={product} />
      <RelatedProducts
        currentProductId={Number(productId)}
        currentCategory={product.category}
      />
    </div>
  );
};

export default SingleProduct;

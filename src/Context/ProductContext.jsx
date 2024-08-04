import React, { createContext, useEffect, useState } from "react";
import { product_list } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const handleSearch = () => {
    if (query.trim()) {
      const filteredProducts = product_list.filter((product) =>
        product.heading.toLowerCase().includes(query.toLowerCase())
      );
      navigate("/searchresult", { state: { filteredProducts, query } });
    }
  };

  const addToCart = (item) => {
    console.log("ITEM", item);
    console.log("CART ITEMS", cartItems);
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const formatPrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  const getTotalCart = () => {
    return cartItems.reduce(
      (total, item) => total + formatPrice(item.price) * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const contextValue = {
    product_list,
    query,
    setQuery,
    handleSearch,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCart,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

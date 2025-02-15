import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./global.css";
import { BrowserRouter, Router } from "react-router-dom";
import ProductContextProvider from "./Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </BrowserRouter>
);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./sections/Home";
import ProductCategory from "./sections/ProductCategory";
// import Product from "./sections/Product";
import SingleProduct from "./sections/SingleProduct";
import Footer from "./components/Footer";
// import { product_list } from "./assets/assets";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Cart from "./sections/Cart";
// import MyCart from "./sections/MyCart";
import CheckoutForm from "./sections/CheckoutForm";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Search />} />
        <Route path="/productsection" element={<ProductCategory />} />
        <Route path="/mens" element={<ProductCategory category="men" />} />
        <Route path="/womens" element={<ProductCategory category="women" />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchresult" element={<SearchResults />} />

        <Route path="/product" element={<SingleProduct />}>
          <Route path=":productId" element={<SingleProduct />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkoutform" element={<CheckoutForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

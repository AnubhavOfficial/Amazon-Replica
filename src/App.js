import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ProductDescription from "./Components/ProductDescription";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import setProductsAction from "./Actions/SetProductsAction";
import SetCartFromLocalStorageAction from "./Actions/SetCartFromLocalStorageAction";
import AddedToCart from "./Components/AddedToCart";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cart") || '{"items":[],"count":0}'
);
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios("https://fakestoreapi.com/products");
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(setProductsAction(response.data));
    };

    apiCall();
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(SetCartFromLocalStorageAction(cartFromLocalStorage));
  }, [dispatch]);
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" exact element={<Home />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/products/:id/AddedToCart" element={<AddedToCart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

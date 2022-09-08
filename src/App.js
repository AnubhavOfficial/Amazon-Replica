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
import Login from "./Components/Login";
import { auth } from "./Firebase";
import setUserAction from "./Actions/setUserAction";

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
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      const initialUserState = {
        uid: "",
        email: "",
        emailVerified: false,
        displayName: "",
        isAnonymous: false,
        providerData: [
          {
            providerId: "",
            uid: "",
            displayName: "",
            email: "",
            phoneNumber: null,
            photoURL: null,
          },
        ],
        stsTokenManager: {
          refreshToken: "",
          accessToken: "",
          expirationTime: 0,
        },
        createdAt: "",
        lastLoginAt: "",
        apiKey: "",
        appName: "[DEFAULT]",
      };

      if (authUser.displayName !== "") {
        dispatch(setUserAction(authUser));
      } else {
        dispatch(setUserAction(initialUserState));
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/products"
            exact
            element={
              <>
                <NavBar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/products/:id"
            exact
            element={
              <>
                <NavBar />
                <ProductDescription />
                <Footer />
              </>
            }
          />
          <Route
            path="/Cart"
            element={
              <>
                <NavBar />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/products/:id/AddedToCart"
            exact
            element={
              <>
                <NavBar />
                <AddedToCart />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

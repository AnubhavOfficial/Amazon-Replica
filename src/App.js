import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ProductDescription from "./Components/ProductDescription";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import setProductsAction from "./Actions/SetProductsAction";
import SetCartFromLocalStorageAction from "./Actions/SetCartFromLocalStorageAction";
import AddedToCart from "./Components/AddedToCart";
import Login from "./Components/Login";
import { auth } from "./Firebase";
import setUserAction from "./Actions/setUserAction";
import SignedInAction from "./Actions/SignedInAction";
import Stripe from "./Components/Stripe";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cart") || '{"items":[],"count":0}'
);
const signedInFromLocalStorage = JSON.parse(
  localStorage.getItem("signedIn") || '{"signedIn":false}'
);

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const signedIn = useSelector((state) => state.signedIn);

  const stripeTestPromise = loadStripe(process.env.REACT_APP_KEY);

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios("https://fakestoreapi.com/products");
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("signedIn", JSON.stringify(signedIn));
      dispatch(setProductsAction(response.data));
    };

    apiCall();
  }, [cart, dispatch, signedIn]);

  useEffect(() => {
    dispatch(SetCartFromLocalStorageAction(cartFromLocalStorage));
    dispatch(SignedInAction(signedInFromLocalStorage));
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

      if (authUser) {
        if (signedIn) {
          dispatch(setUserAction(authUser));
        } else {
          dispatch(setUserAction(initialUserState));
        }
      } else {
        dispatch(setUserAction(initialUserState));
      }
    });
  }, [dispatch, signedIn]);

  return (
    <div>
      {/* <Router>
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
      </Router> */}
      <Elements stripe={stripeTestPromise}>
        <Stripe />
      </Elements>
    </div>
  );
}

export default App;

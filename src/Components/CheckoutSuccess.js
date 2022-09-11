import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetCartFromLocalStorageAction from "./../Actions/SetCartFromLocalStorageAction";

const useStyles = makeStyles({
  main: {
    marginTop: "3.5rem",
    display: "flex",
    height: "calc(100vh - 3.5rem)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    height: "85%",
    width: "90%",
    background: "silver",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  checkout: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  buy: {
    background: "gold",
    fontSize: "1.2rem",
    // width: "10vw",
    // height: "5vh",
    padding: "0.5rem 2rem",
  },
});
function CheckoutSuccess() {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn);
  const [storeCart, setStoreCart] = useState({ items: [], count: 0 });
  // const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    setStoreCart(JSON.parse(localStorage.getItem("cart")));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ items: [], count: 0 }));
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
    dispatch(SetCartFromLocalStorageAction({ items: [], count: 0 }));
  }, [dispatch, signedIn]);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Typography className={classes.checkout}>
          Your order has been received
        </Typography>
        <Typography>{storeCart.count}</Typography>
        <Button className={classes.buy}>Continue Shopping</Button>
      </div>
    </div>
  );
}

export default CheckoutSuccess;

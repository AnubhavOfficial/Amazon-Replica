import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetCartFromLocalStorageAction from "./../Actions/SetCartFromLocalStorageAction";

const useStyles = makeStyles({
  main: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  checkout: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
});
function CheckoutSuccess() {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn);
  // const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ items: [], count: 0 }));
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
    dispatch(SetCartFromLocalStorageAction({ items: [], count: 0 }));
  }, [dispatch, signedIn]);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography className={classes.checkout}>
        Your order has been successfully placed
      </Typography>
      <Typography className={classes.buy}>Browse products</Typography>
    </div>
  );
}

export default CheckoutSuccess;

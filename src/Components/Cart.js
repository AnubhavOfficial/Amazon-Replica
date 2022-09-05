import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

const useStyles = makeStyles({
  main: {},
  footer: {},
});
function Cart() {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className={classes.main}>
      <Typography className={classes.heading}>Shopping Cart</Typography>
      {cartItems.map((item, i) => {
        return <CartProductCard details={item} key={i} />;
      })}
      <Typography className={classes.footer}>
        The price and availability of items at Amazon.in are subject to change.
        The shopping cart is a temporary place to store a list of your items and
        reflects each item's most recent price. Do you have a promotional code?
        We'll ask you to enter your claim code when it's time to pay.
      </Typography>
    </div>
  );
}

export default Cart;

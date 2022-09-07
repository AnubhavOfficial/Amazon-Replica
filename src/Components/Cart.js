import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import emptyCart from "../Assets/images/emptyCart.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    background: "#EAEDED",
    // width: "70%",
    marginTop: "4rem",
    display: "flex",
  },
  leftDiv: {
    margin: "2rem 1rem",
    width: "75%",
  },
  rightDiv: {
    margin: "2rem 1rem",
  },
  innerleftDiv: {
    padding: "1rem",
    background: "white",
  },
  footer: {
    fontSize: "0.8rem",
    marginTop: "1rem",
  },
  divider: {
    margin: "0.7rem 0",
    height: "0.1rem",
    color: "#DDDDDD",
  },
  heading: {
    fontSize: "2rem",
  },
  noItemsDiv: {
    margin: "2rem",
    padding: "1rem",
    background: "white",
    display: "flex",
    width: "80%",
    height: "40vh",
  },
  noItems: {
    margin: "1rem 2rem",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "#007185",
  },
  goToProducts: {
    fontSize: "1.3rem",
    margin: "3rem 2rem",
  },
  subTotal: {
    textAlign: "end",
    paddingRight: "1rem",
  },
});
function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = useSelector((state) => state.cart.count);
  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = cartItems[i].price * 79.67 * cartItems[i].quantity + total;
    }
    return Math.ceil(total);
  };

  return (
    <div className={classes.main}>
      <div className={classes.leftDiv}>
        {cartItems.length === 0 ? (
          <div className={classes.noItemsDiv}>
            <img src={emptyCart} alt="" />
            <div>
              <Typography className={classes.noItems}>
                Your Amazon Cart is empty
              </Typography>
              <Link to="/" className={classes.link}>
                <Typography className={classes.goToProducts}>
                  Show Products
                </Typography>
              </Link>
            </div>
          </div>
        ) : (
          <div className={classes.innerleftDiv}>
            <Typography className={classes.heading}>Shopping Cart</Typography>
            {cartItems.map((item, i) => {
              return (
                <div>
                  <Divider className={classes.divider} />
                  <CartProductCard details={item} key={i} />
                </div>
              );
            })}
            <div className={classes.subTotal}>
              <Typography>
                Subtotal ( {cartCount} items) : {calcTotal().toLocaleString()}
              </Typography>
            </div>
          </div>
        )}
        <Typography className={classes.footer}>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price. Do you have a
          promotional code? We'll ask you to enter your claim code when it's
          time to pay.
        </Typography>
      </div>
      {cartItems.length === 0 ? (
        <></>
      ) : (
        <div className={classes.rightDiv}>
          Total: {calcTotal().toLocaleString()}
        </div>
      )}
    </div>
  );
}

export default Cart;

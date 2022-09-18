import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrdersAction from "./../Actions/OrdersAction";
const useStyles = makeStyles({
  proceedToBuy: {
    background: "#FFD814",
    boxShadow: "0.5px 0.5px 2px 0.5px #F7CA00",
    width: "18vw",
    cursor: "pointer",
    textAlign: "center",
    padding: "0.2rem 0.3rem",
    borderRadius: "0.3rem",
    fontSize: "1rem",
    color: "black",
    marginTop: "1rem",
    "&:hover": {
      background: "#F7CA00",
    },
  },
  link: {
    textDecoration: "none",
  },
});
function CheckoutButton({ quantity }) {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const signedIn = useSelector((state) => state.signedIn);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleCheckout = () => {
    dispatch(OrdersAction(cartItems));
    axios
      .post(`http://localhost:5000/checkout`, {
        cartItems,
        userId: user.uid,
        email: user.email,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
          console.log(res);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <>
      {signedIn ? (
        <Typography
          className={classes.proceedToBuy}
          onClick={() => handleCheckout()}
        >
          {quantity === 0
            ? "Proceed to Buy"
            : `Proceed to Buy ( ${quantity} items )`}
        </Typography>
      ) : (
        <Link to="/Login" className={classes.link}>
          <Typography className={classes.proceedToBuy}>
            {quantity === 0
              ? "Proceed to Buy"
              : `Proceed to Buy ( ${quantity} items )`}
          </Typography>
        </Link>
      )}
    </>
  );
}

export default CheckoutButton;
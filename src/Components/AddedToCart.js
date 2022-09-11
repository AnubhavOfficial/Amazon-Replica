import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import { BiRupee } from "react-icons/bi";
import CheckoutButton from "./CheckoutButton";
const useStyles = makeStyles({
  main: {
    marginTop: "10vh",
    paddingTop: "10vh",
    height: "70vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    background: "#F4F4F4",
  },
  card: {
    height: "50vh",
    width: "50vw",
    display: "flex",
    background: "white",
    padding: "1rem 2rem",
  },
  card2: {
    height: "20vh",
    width: "27vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-around",
    background: "white",
    paddingLeft: "4vw",
    padding: "3vh 0",
  },
  heading: {
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
  },
  checkIcon: {
    color: "#53f000",
    marginRight: "0.5rem",
  },
  image: {
    height: "45vh",
    width: "20vw",
  },
  subDiv2: {
    marginLeft: "2rem",
  },
  backBtn: {
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "1.8rem",
    color: "#007185",
    "&:hover": {
      background: "transparent",
      textDecoration: "underline",
    },
  },
  buttonText: {
    fontSize: "1.6rem",
  },
  rupee: {
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
  },
  goToCart: {
    width: "18vw",
    padding: "0.2rem 0.3rem",
    borderRadius: "0.3rem",
    border: "1px solid lightgrey",
    cursor: "pointer",
    fontSize: "1rem",
    textAlign: "center",
    marginTop: "0.5rem",
    color: "black",
    boxShadow: "0.5px 0.5px 2px 0px grey",
    "&:hover": {
      background: "#F7FAFA",
    },
  },
  bottomButton: {
    height: "20vh",
  },
  link: {
    textDecoration: "none",
  },
});
function AddedToCart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const classes = useStyles();
  const product = useSelector((state) => state.products[id - 1]);
  const cartItems = useSelector((state) => state.cart.items);
  const quantity = useSelector((state) => state.cart.count);
  const cartTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = cartItems[i].price * cartItems[i].quantity + total;
    }
    return Math.floor(total);
  };
  const calcItemQuantity = () => {
    let itemQuantity = 0;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        itemQuantity = cartItems[i].quantity;
      }
    }
    return itemQuantity;
  };
  return (
    <>
      {product && (
        <div>
          <div className={classes.main}>
            <div className={classes.card}>
              <div>
                <img src={product.image} alt="" className={classes.image} />
              </div>
              <div className={classes.subDiv2}>
                <Typography className={classes.heading}>
                  <FaCheckCircle className={classes.checkIcon} />
                  Added to Cart
                </Typography>
                <Typography>{product.title}</Typography>
                <Typography>Total Quantity: {calcItemQuantity()}</Typography>
              </div>
            </div>
            <div className={classes.card2}>
              <Typography className={classes.rupee}>
                <b>Cart subtotal:</b> &nbsp;
                <BiRupee className={classes.rupee} />
                {cartTotal().toLocaleString()}
              </Typography>

              <CheckoutButton quantity={quantity} />

              <Link to="/Cart" className={classes.link}>
                <Typography className={classes.goToCart}>Go to Cart</Typography>
              </Link>
            </div>
          </div>
          <div className={classes.bottomButton}>
            <center>
              <Link to="/" className={classes.link}>
                <Button className={classes.backBtn}>
                  <BiChevronLeft />{" "}
                  <Typography className={classes.buttonText}>
                    See more products
                  </Typography>
                </Button>
              </Link>
            </center>
          </div>
        </div>
      )}
    </>
  );
}

export default AddedToCart;

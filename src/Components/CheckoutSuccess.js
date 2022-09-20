import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SetCartFromLocalStorageAction from "./../Actions/SetCartFromLocalStorageAction";
import { FaCheckCircle } from "react-icons/fa";
import orderPlaced from "../Assets/images/testing.png";

const useStyles = makeStyles({
  main: {
    marginTop: "2.5rem",
    display: "flex",
    height: "calc(100vh - 2.5rem)",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    padding: "1rem 2rem",
  },
  container: {
    height: "67%",
    width: "99%",
    display: "flex",
    background: "#ebebeb",
    flexDirection: "column",
    borderRadius: "0.3rem",
    marginTop: "1.5rem",
    padding: "1.3rem",
  },
  box: {
    background: "white",
    padding: "1.5rem",
    height: "calc(100% - 3rem)",
    borderRadius: "0.3rem",
    boxShadow: "0.5px 0.5px 3px 2px lightgrey",
    display: "flex",
  },
  confirmation: {
    fontSize: "1rem",
    marginTop: "0.7rem",
  },
  buy: {
    background: "gold",
    fontSize: "1.2rem",
    padding: "0.5rem 2rem",
    marginTop: "2rem",
    "&:hover": {
      background: "gold",
    },
  },
  link: {
    textDecoration: "none",
  },
  orderPlaced: {
    color: "#0d755e",
    fontSize: "1.2rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  checkIcon: {
    marginRight: "0.5rem",
  },
  shippingTo: {
    fontWeight: "bold",
    fontSize: "1rem",
    marginTop: "1rem",
  },
  left: {
    width: "50%",
  },
  right: {
    width: "50%",
    overflow: "none",
  },
  orderImage: {
    width: "100%",
    height: "100%",
    borderRadius: "0.7rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  divider: {
    margin: "0.7rem 0",
    width: "98%",
  },
  date: {
    color: "green",
    fontWeight: "bold",
  },
});
function CheckoutSuccess() {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ items: [], count: 0 }));
    localStorage.setItem("signedIn", JSON.stringify(signedIn));
    dispatch(SetCartFromLocalStorageAction({ items: [], count: 0 }));
  }, [dispatch, signedIn]);
  const classes = useStyles();

  const deliveryDate = () => {
    let current = new Date();
    current.setDate(current.getDate() + 5);
    const date = current.getDate();
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][current.getMonth()];
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][current.getDay()];
    return weekday + ", " + date + " " + month;
  };
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.left}>
            <Typography className={classes.orderPlaced}>
              <FaCheckCircle className={classes.checkIcon} />
              Order placed, thank you!
            </Typography>
            <Typography className={classes.confirmation}>
              Confirmation will be sent to your email.
            </Typography>
            <Typography className={classes.shippingTo}>
              Shipping to {user.displayName}
            </Typography>
            <Divider className={classes.divider} />
            <Typography className={classes.date}>{deliveryDate()}</Typography>
            <Typography className={classes}>Delivery date</Typography>
          </div>
          <div className={classes.right}>
            <a href="https://www.primevideo.com/" target="blank">
              <img src={orderPlaced} alt="" className={classes.orderImage} />
            </a>
          </div>
        </div>
      </div>
      <Link to="/" className={classes.link}>
        <Button className={classes.buy}>Continue Shopping</Button>
      </Link>
    </div>
  );
}

export default CheckoutSuccess;

import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import RemoveItemFromCartAction from "./../Actions/RemoveItemFromCartAction";

const useStyles = makeStyles({
  main: {
    height: "35vh",
    boxShadow: "none",
    display: "flex",
  },
  image: {
    width: "20%",
    marginRight: "2rem",
  },
  title: {
    fontSize: "1.2rem",
    width: "90%",
  },
  link: {
    fontSize: "0.9rem",
    color: "#007185",
    textDecoration: "none",
    "&:hover": {
      color: "#C7511F",
      textDecoration: "underline",
    },
  },
  giftOptions: {
    fontSize: "0.9rem",
    color: "#565959",
    marginRight: "0.2rem",
  },
  giftDiv: {
    display: "flex",
    alignItems: "center",
  },
  stock: {
    fontSize: "0.9rem",
    color: "#00855A",
    marginTop: "0.5rem",
  },
  DeleteButton: {
    fontSize: "1rem",
    marginTop: "1rem",
    cursor: "pointer",
    "&:hover": {
      color: "#007185",
    },
  },
});
function CartProductCard(props) {
  const { details } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const calcPrice = (val) => {
    return Math.floor(val);
  };
  const deleteFromCart = () => {
    dispatch(RemoveItemFromCartAction(details.id, details.quantity));
  };
  return (
    <Card className={classes.main}>
      <img src={details.image} alt="" className={classes.image} />
      <div style={{ width: "75%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography className={classes.title}>{details.title}</Typography>
          <Typography>₹ {calcPrice(details.price).toLocaleString()}</Typography>
        </div>
        <Typography className={classes.stock}>In stock</Typography>
        <div className={classes.giftDiv}>
          <Typography className={classes.giftOptions}>
            Gift options not available.
          </Typography>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?pop-up=1&nodeId=200898020"
            className={classes.link}
            target="blank"
          >
            Learn more
          </a>
        </div>
        <Typography>Quantity: {details.quantity}</Typography>
        <Typography
          className={`${classes.link} ${classes.DeleteButton}`}
          onClick={deleteFromCart}
        >
          Delete item from Cart
        </Typography>
      </div>
    </Card>
  );
}

export default CartProductCard;

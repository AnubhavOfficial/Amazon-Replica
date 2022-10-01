import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import RemoveItemFromCartAction from "./../Actions/RemoveItemFromCartAction";
import UpdateProductAction from "./../Actions/UpdateProductAction";

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
  select: {
    width: "3rem",
    marginLeft: "1rem",
    height: "2rem",
    outline: "none",
    // textAlign: "center",
    paddingLeft: "0.5rem",
    cursor: "pointer",
  },
  quantityDiv: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  quantity: {
    fontWeight: "bold",
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
        <div className={classes.quantityDiv}>
          <Typography className={classes.quantity}>Quantity: </Typography>
          <select
            className={classes.select}
            onChange={(e) => {
              // setItemQuantity(e.target.value);
              dispatch(UpdateProductAction(details.id, e.target.value));
            }}
            value={details.quantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
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

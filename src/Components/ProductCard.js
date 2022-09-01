import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import StarRatings from "react-star-ratings";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  main: {
    height: "58vh",
    width: "23vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "none",
    marginTop: "2rem",
    borderRadius: "1rem",
    cursor: "pointer",
    // opacity: 0.8,
    "&:hover": {},
  },
  title: {
    height: "2rem",
    width: "90%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  image: {
    height: "70%",
    width: "80%",
    marginTop: "0.5rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    background: "transparent",
  },
  addToCart: {
    background: "#FFD814",
    height: "2rem",
    width: "8rem",
    borderRadius: "0.5rem",
    marginTop: "0.5rem",
    "&:hover": {
      background: "#F7CA00",
      transform: "scale(1.05)",
    },
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  count: {
    marginLeft: "0.5rem",
    color: "#007185",
    fontSize: "1rem",
  },
});
const rupeeCalculate = (val) => {
  const dec = Math.ceil(val);
  return dec;
};
const ProductCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.main}>
      <img src={item.image} alt="" className={classes.image} />
      <Typography className={classes.title}>{item.title}</Typography>
      <div className={classes.footer}>
        <Typography> ₹ {rupeeCalculate(item.price * 79.67)}</Typography>
        <span title={item.rating.rate + " out of 5"} className={classes.rating}>
          <StarRatings
            rating={item.rating.rate}
            starRatedColor="#FFA41C"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="3px"
          />
          <Typography className={classes.count}>{item.rating.count}</Typography>
        </span>
      </div>
      <Button
        className={classes.addToCart}
        onClick={(e) => {
          alert("clicked");
          e.preventDefault();
        }}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;

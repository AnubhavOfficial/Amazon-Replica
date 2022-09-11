import { Card, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
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
  },
  title: {
    height: "2rem",
    width: "90%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginTop: "0.5rem",
  },
  image: {
    height: "70%",
    width: "80%",
    marginTop: "0.5rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    background: "transparent",
  },
  addToCart: {
    background: "#FEBD69",
    height: "2rem",
    width: "8rem",
    borderRadius: "0.5rem",
    marginTop: "0.5rem",
    "&:hover": {
      background: "#FEBD69",
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
  hoverText: {
    position: "relative",
    top: "50%",
    border: "1px solid grey",
    background: "#F7FAFA",
    width: "50%",
    margin: "auto",
    height: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0.5px 0.5px 2px 0px grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: "#dcf4f7",
    },
  },
});
const rupeeCalculate = (val) => {
  const dec = Math.floor(val);
  return dec;
};
const ProductCard = ({ item }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <Card
      className={classes.main}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {hover && (
          <div className={classes.hoverText}>
            {" "}
            <Typography>Quick Look</Typography>
          </div>
        )}
      </div>
      <Typography className={classes.title}>{item.title}</Typography>
      <div className={classes.footer}>
        <Typography>
          {" "}
          ₹ {rupeeCalculate(item.price * 79.67).toLocaleString()}
        </Typography>
        <span title={item.rating.rate + " out of 5"} className={classes.rating}>
          <StarRatings
            rating={item.rating.rate}
            starRatedColor="#FFA41C"
            numberOfStars={5}
            name="rating"
            starDimension="1.2rem"
            starSpacing="0.15rem"
          />
          <Typography className={classes.count}>{item.rating.count}</Typography>
        </span>
      </div>
      <Button className={classes.addToCart}>Show Now</Button>
    </Card>
  );
};

export default ProductCard;

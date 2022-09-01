import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";
import Divider from "@material-ui/core/Divider";
import { BsCurrencyDollar } from "react-icons/bs";
import AddBanner1 from "../Assets/images/amazonAddBanner1.jpg";
import AddBanner2 from "../Assets/images/amazonAddBanner2.jpg";
import AddBanner3 from "../Assets/images/amazonAddBanner3.jpg";
import AddBanner4 from "../Assets/images/amazonAddBanner4.jpg";
import ProductDeliveryOptions from "./ProductDeliveryOptions";

const useStyles = makeStyles({
  main: {
    marginTop: "3rem",
    padding: "1rem",
  },
  addBanner: {
    // width: "100%",
    // height:
    backgroundSize: "70vw 10vh",
    backgroundRepeat: "no-repeat",
    height: "10vh",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    width: "60vw",
  },
  backBtn: {
    textTransform: "none",
    fontSize: "1rem",
    "&:hover": {
      background: "transparent",
    },
  },
  image: {
    height: "60vh",
    width: "22vw",
  },
  productInfo: {
    display: "flex",
    marginTop: "2rem",
    justifyContent: "space-around",
  },
  descriptionDiv: {
    width: "60vw",
  },
  description: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  category: {
    fontSize: "1.2rem",
    fontWeight: "bold",
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
  priceDiv: {},
  price: {
    fontSize: "1.7rem",
    margin: "0.5rem 0 0 0 ",
    display: "flex",
    alignItems: "center",
  },
  taxes: {
    fontSize: "0.9rem",
    margin: "0 0 0.5rem 0",
  },
  rateCategory: {
    display: "flex",
    justifyContent: "space-between",
  },
  divider: {
    margin: "0.5rem 0",
  },
  dollar: {
    fontSize: "1.1rem",
  },
  addToCart: {
    background: "#FFD814",
    height: "2rem",
    width: "8rem",
    borderRadius: "0.5rem",
    marginTop: "3rem",
    "&:hover": {
      background: "#F7CA00",
      transform: "scale(1.05)",
    },
  },
});
const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [addBanner, setAddBanner] = useState(AddBanner4);
  const [description, setDescription] = useState([]);
  const [num, setNum] = useState(0);
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios("https://fakestoreapi.com/products");
      setProduct(response.data[id - 1]);
      descriptionArray(response.data[id - 1].description);
    };

    apiCall();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = [AddBanner1, AddBanner2, AddBanner3, AddBanner4];
      if (num === 3) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
      setAddBanner(images[num]);
    }, 5000);
    return () => clearInterval(interval);
  }, [num]);

  const classes = useStyles();
  const descriptionArray = (para) => {
    var arr = para.split(".");
    setDescription(arr);
  };
  const capitalize = (word) => {
    var newWord = word.charAt(0).toUpperCase() + word.substring(1, word.length);
    return newWord;
  };
  return (
    <div className={classes.main}>
      <a href="https://www.primevideo.com/" target="blank">
        <div
          className={classes.addBanner}
          style={{ backgroundImage: `url(${addBanner})` }}
        ></div>
      </a>
      <Link to="/" className={classes.link}>
        <Button className={classes.backBtn}>
          <ArrowBack /> &nbsp; Go back to All Products
        </Button>
      </Link>
      <div className={classes.productInfo}>
        <img
          src={product.image}
          alt={product.title}
          className={classes.image}
        />
        <div>
          <Typography className={classes.title}>{product.title}</Typography>

          <div className={classes.rateCategory}>
            {product.rating && (
              <span
                title={product.rating.rate + " out of 5"}
                className={classes.rating}
              >
                <StarRatings
                  rating={product.rating.rate}
                  starRatedColor="#FFA41C"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="3px"
                />
                <Typography className={classes.count}>
                  {product.rating.count}
                </Typography>
              </span>
            )}
            {product.category && (
              <Typography className={classes.category}>
                {capitalize(product.category)}
              </Typography>
            )}
          </div>
          <Divider className={classes.divider} />
          <div className={classes.priceDiv}>
            <Typography className={classes.price}>
              <BsCurrencyDollar className={classes.dollar} />
              {product.price}
            </Typography>
            <Typography className={classes.taxes}>
              Inclusive of all taxes
            </Typography>
          </div>
          <Divider className={classes.divider} />
          <div className={classes.descriptionDiv}>
            <Typography className={classes.description}>
              About this item
            </Typography>
            {description.map((items, i) => {
              items =
                items.charAt(0).toUpperCase() +
                items.substring(1, items.length);
              return (
                items.length > 2 && <Typography key={i}>• {items}</Typography>
              );
            })}
          </div>
          <Divider className={classes.divider} />
          <ProductDeliveryOptions />
          <Divider className={classes.divider} />
          <Button className={classes.addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

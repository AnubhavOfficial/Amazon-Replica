import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/styles";
import amazonBanner from "../Assets/images/amazonBanner.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${amazonBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 70vh",
    height: "70vh",
    // marginLeft: "0.7vw",
  },
  grid: {
    // marginTop: "1rem",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    cursor: "default",
  },
  main: {
    marginTop: "2.8rem",
    backgroundImage: "linear-gradient(180deg ,#0E032E 50%, #ffffff)",
  },
});
function Home() {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios("https://fakestoreapi.com/products");
      setData(response.data);
    };

    apiCall();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.banner}></div>
      <Grid container className={classes.grid}>
        {Object.keys(data).map((i) => {
          return (
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={i}>
              <Link to={`/products/${data[i].id}`} className={classes.gridItem}>
                <ProductCard item={data[i]} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;

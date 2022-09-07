import { Grid } from "@material-ui/core";
import React from "react";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/styles";
import amazonBanner from "../Assets/images/amazonBanner.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${amazonBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 70vh",
    height: "70vh",
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
    paddingBottom: "2rem",
  },
});
function Home() {
  const classes = useStyles();
  const data = useSelector((state) => state.products);

  return (
    <div className={classes.main}>
      <div className={classes.banner}></div>
      <Grid container className={classes.grid}>
        {Object.keys(data).map((i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={i}>
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

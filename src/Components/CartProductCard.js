import { Card, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  main: {
    height: "15vh",
    width: "100%",
    marginTop: "2rem",
    background: "red",
  },
});
function CartProductCard(props) {
  const { details } = props;
  const classes = useStyles();
  return <Card className={classes.main}>{details.title}</Card>;
}

export default CartProductCard;

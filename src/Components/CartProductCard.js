import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  main: {
    height: "15vh",
    width: "100%",
    marginTop: "4rem",
    background: "red",
  },
});
function CartProductCard(props) {
  const { details } = props;
  const classes = useStyles();
  return (
    <Card className={classes.main}>
      <Typography>{details.title}</Typography>
      <Typography>{details.quantity}</Typography>
    </Card>
  );
}

export default CartProductCard;

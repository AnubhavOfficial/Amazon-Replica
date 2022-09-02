import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiDropbox } from "react-icons/si";

const useStyles = makeStyles({
  main: {
    display: "flex",
    margin: "0.5rem 0",
  },
  icon: {
    width: "2rem",
    height: "2rem",
    // color: "#007185",
    color: "skyblue",
  },
  iconDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 1rem",
    cursor: "pointer",
  },
  text: {
    fontSize: "0.8rem",
    color: "#007185",
    marginTop: "0.5rem",
    cursor: "pointer",
    "&:hover": {
      color: "#C7511F",
    },
  },
});

function ProductDeliveryOptions() {
  const classes = useStyles();
  const detailsModal = (value) => {
    console.log(value);
  };
  return (
    <div className={classes.main}>
      <div
        className={classes.iconDiv}
        onClick={() => detailsModal("cashOnDelivery")}
      >
        <GiTakeMyMoney className={classes.icon} />
        <Typography className={classes.text}>Cash on Delivery</Typography>
      </div>
      <div
        className={classes.iconDiv}
        onClick={() => detailsModal("notReturnable")}
      >
        <SiDropbox className={classes.icon} />
        <Typography className={classes.text}>Not Returnable</Typography>
      </div>
      <div
        className={classes.iconDiv}
        onClick={() => detailsModal("amazonDelivered")}
      >
        <TbTruckDelivery className={classes.icon} />
        <Typography className={classes.text}>Amazon Delivered</Typography>
      </div>
      <div className={classes.iconDiv} onClick={() => detailsModal("warrenty")}>
        <BsShieldCheck className={classes.icon} />
        <Typography className={classes.text}>1 Year Warranty</Typography>
      </div>
    </div>
  );
}

export default ProductDeliveryOptions;

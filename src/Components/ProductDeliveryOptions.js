import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
// import { FaHandHoldingUsd } from "react-icons/fa";
// import { BsBoxSeam } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiDropbox } from "react-icons/si";
import { ArrowContainer, Popover } from "react-tiny-popover";

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
  popover: {
    padding: "1rem",
    background: "#f7f5f5",
    width: "35vw",
    borderRadius: "0.5rem",
    border: "1px solid grey",
    // boxShadow: "2px 2px  5px 1px grey",
  },
  heading: {
    fontSize: "0.95rem",
    fontWeight: "bold",
  },
  description: {
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
  arrow: {
    border: "1px solid red",
    // boxShadow: "2px 2px  5px 1px grey",
  },
});

function ProductDeliveryOptions() {
  const classes = useStyles();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const detailsModal = (value) => {
    console.log(value);
  };
  return (
    <div className={classes.main}>
      <Popover
        isOpen={isPopoverOpen}
        positions={["bottom"]} // if you'd like, you can limit the positions
        padding={15} // adjust padding here!
        reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
        onClickOutside={() => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
        content={(
          { position, childRect, popoverRect } // you can also provide a render function that injects some useful stuff!
        ) => (
          <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={"#f7f5f5"}
            arrowSize={10}
            arrowStyle={{ opacity: 1 }}
            // className={classes.popover}
            arrowClassName={classes.arrow}
          >
            <div className={classes.popover}>
              <Typography className={classes.heading}>
                What is Cash on Delivery (Cash/Card)?
              </Typography>
              <Typography className={classes.description}>
                Cash on Delivery (COD) payment includes both cash as well as
                Debit card/Credit card/Net banking payments at your doorstep.
              </Typography>
            </div>
          </ArrowContainer>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            detailsModal("cashOnDelivery");
            setIsPopoverOpen(!isPopoverOpen);
          }}
        >
          <GiTakeMyMoney className={classes.icon} />
          <Typography className={classes.text}>Cash on Delivery</Typography>
        </div>
      </Popover>

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

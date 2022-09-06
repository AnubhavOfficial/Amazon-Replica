import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiDropbox } from "react-icons/si";
import { Popover } from "react-tiny-popover";
import { MdDangerous } from "react-icons/md";
import { BsCamera } from "react-icons/bs";

const useStyles = makeStyles({
  main: {
    display: "flex",
    margin: "0.5rem 0",
  },
  icon: {
    width: "2rem",
    height: "2rem",
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
    background: "white",
    width: "35vw",
    borderRadius: "0.5rem",
    border: "1px solid grey",
    boxShadow: "0.5px 0.5px 5px 0px grey",
  },
  heading: {
    fontSize: "0.95rem",
    fontWeight: "bold",
  },
  description: {
    fontSize: "0.9rem",
  },
  close: {
    color: "black",
    fontSize: "1rem",
    height: "3rem",
    cursor: "pointer",
    "&:hover": {
      background: "transparent",
    },
  },
  popoverHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  returnDiv: {
    display: "flex",
    marginTop: "1rem",
    justifyContent: "space-between",
    alignItems: "start",
  },
  returnIcons: {
    fontSize: "3.5rem",
    color: "#414042",
  },
  returnIconDiv: {
    marginRight: "1rem",
    padding: "1.5rem 1.2rem",
    background: "#F1F2F2",
  },
});

function ProductDeliveryOptions() {
  const classes = useStyles();
  const [isCODPopoverOpen, setIsCODPopoverOpen] = useState(false);
  const [isReturnablePopoverOpen, setIsReturnablePopoverOpen] = useState(false);
  const [isDeliveredPopoverOpen, setIsDeliveredPopoverOpen] = useState(false);
  const [isWarrantyPopoverOpen, setIsWarrantyPopoverOpen] = useState(false);
  return (
    <div className={classes.main}>
      <Popover
        isOpen={isCODPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsCODPopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
                What is Cash on Delivery (Cash/Card)?
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsCODPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.description}>
              Cash on Delivery (COD) payment includes both cash as well as Debit
              card/Credit card/Net banking payments at your doorstep.
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsCODPopoverOpen(!isCODPopoverOpen);
          }}
        >
          <GiTakeMyMoney className={classes.icon} />
          <Typography className={classes.text}>Cash on Delivery</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isReturnablePopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsReturnablePopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
                Not Returnable
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsReturnablePopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                This item is non-returnable due to the nature of the product.
              </Typography>
              <div className={classes.returnDiv}>
                <div className={classes.returnIconDiv}>
                  <MdDangerous className={classes.returnIcons} />
                </div>
                <Typography className={classes.description}>
                  For damaged, defective, wrong or expired item you can request
                  for a refund or replacement within 5 days of delivery.
                </Typography>
              </div>
              <div className={classes.returnDiv}>
                <div className={classes.returnIconDiv}>
                  <BsCamera className={classes.returnIcons} />
                </div>
                <Typography className={classes.description}>
                  You will need to share the images of the item and its defects
                  through Your Orders for a refund or replacement.
                </Typography>
              </div>
            </div>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsReturnablePopoverOpen(!isReturnablePopoverOpen);
          }}
        >
          <SiDropbox className={classes.icon} />
          <Typography className={classes.text}>Not Returnable</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isDeliveredPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsDeliveredPopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
                Amazon Delivered
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsDeliveredPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.description}>
              Amazon directly manages delivery for this product. Order delivery
              tracking to your doorstep is available.
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsDeliveredPopoverOpen(!isDeliveredPopoverOpen);
          }}
        >
          <TbTruckDelivery className={classes.icon} />
          <Typography className={classes.text}>Amazon Delivered</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isWarrantyPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsWarrantyPopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
                1 Year Warranty
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsWarrantyPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.description}>
              1 year on product
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsWarrantyPopoverOpen(!isWarrantyPopoverOpen);
          }}
        >
          <BsShieldCheck className={classes.icon} />
          <Typography className={classes.text}>1 Year Warranty</Typography>
        </div>
      </Popover>
    </div>
  );
}

export default ProductDeliveryOptions;

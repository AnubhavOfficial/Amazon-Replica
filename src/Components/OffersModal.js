import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const useStyles = makeStyles({
  headerDiv: {
    background: "#F5F6F7",
    height: "10.5vh",
    display: "flex",
    alignItems: "center",
    padding: "0 1.80rem",
    boxShadow: "0 1px 5px 0 #d1d1d1",
  },
  header: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  body: {
    padding: "0 1.5rem",
  },
  text1: {
    fontWeight: "bold",
    fontSize: "0.9rem",
    marginTop: "0.4rem",
  },
  heading: {
    fontSize: "1.15rem",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
    marginTop: "1.2rem",
  },
  paragraph: {
    fontSize: "0.85rem",
    lineHeight: "1.4",
    letterSpacing: "-0.1px",
    width: "95%",
  },
  divider: {
    marginTop: "1rem",
  },
  btn: {
    fontSize: "0.75rem",
    color: "#0a8cc2",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginTop: "0.8rem",
    "&:hover": {
      textDecoration: "underline",
      color: "#C7511F",
    },
  },
  downIcon: {
    fontSize: "0.7rem",
    marginRight: "0.1rem",
    strokeWidth: "0.5px !important",
    color: "#343434",
  },
  FAQ: {
    margin: "0.5rem 0",
  },
  question: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    lineHeight: "1.25",
    marginTop: "0.3rem",
  },
  answer: {
    fontSize: "0.8rem",
    lineHeight: "1.3",
  },
  ul: {
    margin: 0,
  },
  termsHeading: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  termsDiv: {
    padding: "0.4rem 0 0 1rem",
  },
});
export const NoCostEmiModal = () => {
  const classes = useStyles();
  const [FAQ, setFAQ] = useState(false);
  const [terms, setTerms] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);
  const [rotateChevron2, setRotateChevron2] = useState(false);
  const handleRotate = () => setRotateChevron(!rotateChevron);
  const handleRotate2 = () => setRotateChevron2(!rotateChevron2);

  const rotateFAQ = rotateChevron ? "rotate(180deg)" : "rotate(0)";
  const rotateTerms = rotateChevron2 ? "rotate(180deg)" : "rotate(0)";
  const showFAQ = (val) => {
    setFAQ(val);
    handleRotate();
  };
  const showTerms = (val) => {
    setTerms(val);
    handleRotate2();
  };
  return (
    <div>
      <div className={classes.headerDiv}>
        <Typography className={classes.header}>No Cost EMI</Typography>
      </div>
      <div className={classes.body}>
        <Typography className={classes.text1}>Special Offers</Typography>
        <Typography className={classes.heading}>
          Avail No Cost EMI on select cards for orders above ₹3000
        </Typography>
        <Typography className={classes.paragraph}>
          To make this a No Cost EMI offer, interest amount will be discounted
          from the price of your order. Total amount you pay to the bank
          (excluding GST) will be equal to the price of the item. Bank may
          charge you GST only on the interest amount. Certain tenures are
          available on no cost EMI only on down payment. Please check EMI plans
          in payments page for more details.
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.btn} onClick={() => showFAQ(!FAQ)}>
          <BiChevronDown
            className={classes.downIcon}
            style={{ transform: rotateFAQ, transition: "all 0.05s linear" }}
          />
          FAQs
        </Typography>
        {FAQ && (
          <div className={classes.FAQ}>
            <ul className={classes.ul}>
              <li className={classes.ul}>
                <Typography className={classes.question}>
                  Is No Cost EMI available on buying more than one product in
                  one order?
                </Typography>
                <Typography className={classes.answer}>
                  Yes. You can buy any number of products and avail No Cost EMI
                  on products eligible for No Cost EMI. The discount will be
                  calculated only on the eligible items.
                </Typography>
              </li>
              <li>
                <Typography className={classes.question}>
                  What is the minimum amount I need to purchase to avail EMI or
                  No Cost EMI?{" "}
                </Typography>
                <Typography className={classes.answer}>
                  EMI is available only on purchases above INR 3,000. As long as
                  you are purchasing for products more than 3,000 you can avail
                  No Cost EMI on eligible products in the cart.
                </Typography>
              </li>
              <li>
                <Typography className={classes.question}>
                  Is there any specific coupon code for No Cost EMI?
                </Typography>
                <Typography className={classes.answer}>
                  No. You just need to pay using eligible card and select tenure
                  with No Cost EMI promotion enabled
                </Typography>
              </li>

              <li>
                <Typography className={classes.question}>
                  Will my bank continue to charge me interest?
                </Typography>
                <Typography className={classes.answer}>
                  Yes, your bank will charge you interest. However, this
                  interest charge has been provided to you as an upfront
                  discount at the time of your purchase, effectively giving you
                  the benefit of a No Cost EMI. This discount excludes GST on
                  interest amount that will be charged by your bank.
                </Typography>
              </li>
            </ul>
          </div>
        )}
        <Typography className={classes.btn} onClick={() => showTerms(!terms)}>
          <BiChevronDown
            className={classes.downIcon}
            style={{ transform: rotateTerms, transition: "all 0.05s linear" }}
          />
          Terms and Conditions
        </Typography>
        {terms && (
          <div className={classes.termsDiv}>
            <Typography className={classes.termsHeading}>
              Terms and Conditions of Credit Card No Cost EMI
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};
export const BankOfferModal = () => {
  return <div>BankOfferModal</div>;
};
export const PartnerOffersModal = () => {
  return <div>PartnerOffersModal</div>;
};

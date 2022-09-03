import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronLeft } from "react-icons/bi";
const useStyles = makeStyles({
  headerDiv: {
    background: "#F5F6F7",
    height: "10.5vh",
    display: "flex",
    alignItems: "center",
    padding: "0 1.5rem",
    justifyContent: "space-between",
    boxShadow: "0 1px 5px 0 #d1d1d1",
    position: "fixed",
    width: "Calc(38vw - 3rem)",
    top: 0,
  },
  close: {
    // position: "fixed",
    // right: 5,
    // top: 12,
    color: "black",
    fontSize: "1.5rem",
    height: "3rem",
    // zIndex: "2",
    "&:hover": {
      background: "transparent",
    },
  },
  header: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  body: {
    padding: "0.5rem 1.5rem",
    marginTop: "10.5vh",
  },
  text1: {
    fontWeight: "bold",
    fontSize: "0.9rem",
    // paddingTop: "0.5rem",
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
  rightIcon: {
    fontSize: "0.9rem",
  },
  leftIcon: {
    fontSize: "1.15rem",
    strokeWidth: "0.5px !important",
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
  ulTerms: {
    margin: 0,
    paddingLeft: "1.5rem",
  },
  termsHeading: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  termsDiv: {
    padding: "0.4rem 0 1rem 1rem",
  },
  termsBody: {
    fontSize: "0.78rem",
    fontFamily: "Roboto",
    lineHeight: "1.4",
    wordSpacing: "1px",
  },
  listItem: {
    marginTop: "1rem",
  },
  amazonLink: {
    color: "#0a8cc2",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#C7511F",
    },
  },
  termsInnerHeading: {
    fontSize: "0.78rem",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
  offerTitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0.7rem 0",
  },
  offerDesc: {
    fontSize: "0.95rem",
  },
  availOffer: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "0.7rem",
  },
  backButton: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  partnerHeading: {
    fontSize: "1.15rem",
  },
  promotionTermsDiv: {
    marginLeft: "1rem",
  },
  promotionTerms: {
    fontSize: "1.05rem",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  ol: {
    margin: "0",
    padding: "0",
    marginTop: "0.3rem",
    paddingLeft: "0.8rem",
    fontSize: "0.78rem",
  },
  noteMargin: {
    marginTop: "0.3rem",
  },
});
export const NoCostEmiModal = (props) => {
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
        <Button
          className={classes.close}
          onClick={() => {
            props.toggleDrawer(false);
          }}
        >
          &#10006;
        </Button>
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
                  No Cost EMI?
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
            <Typography className={classes.termsBody}>
              The following terms and conditions apply to no cost equated
              monthly installment (""<b>EMI</b>"") transactions made using a
              credit card issued by any bank and using EMI facility as a payment
              option (""<b>No Cost EMI</b>"")
            </Typography>
            <ul className={classes.ulTerms}>
              <li className={`${classes.termsBody} ${classes.listItem}`}>
                The No Cost EMI facility is being offered to the customers who
                make a purchase transaction on{" "}
                <a
                  href="http://www.amazon.in"
                  target="blank"
                  className={classes.amazonLink}
                >
                  www.amazon.in
                </a>{" "}
                or the mobile application/ mobile site thereof (collectively, ""
                <b>Amazon.in</b>"") using a credit card issued by any bank using
                EMI facility; if available on Amazon.in
              </li>
              <li className={classes.termsBody}>
                The No Cost EMI facility is made available on select products,
                as determined from time to time.
              </li>
              <li className={classes.termsBody}>
                The No Cost EMI payment option can only be availed using the
                credit card of any bank on Amazon.in and is not available on
                purchases made using any other payment method including debit
                cards or net banking or pay on delivery payment methods.
              </li>
              <li className={classes.termsBody}>
                Using the No Cost EMI payment option, the customers who
                undertake the purchase transactions on Amazon.in, will only pay
                amounts such that the total of these amounts during the EMI
                tenure is equal to the list price of the products as displayed
                on Amazon.in (at the time of making the purchase transactions).
                The participating sellers or brands (as the case may be) will
                provide amounts equivalent to the interest imposed by the banks
                to undertake the purchase transactions on EMI.
              </li>
              <li className={classes.termsBody}>
                The banks issuing the credit cards reserve the right to charge
                Goods and Services Tax (GST) or other applicable taxes on the
                purchase transactions undertaken on EMI.
              </li>
              <li className={classes.termsBody}>
                Customers can add more than one item to their cart and if all
                the products are available on no cost EMI, you will get no cost
                EMI discount on all. No Cost EMI discount will be calculated
                only on the eligible items in the cart.{" "}
              </li>
              <li className={classes.termsBody}>
                Customers may avail the No Cost EMI facility, provided that:
                <ol>
                  <li className={classes.termsBody}>
                    the order is not cancelled by the customer or the
                    participating sellers or Amazon; or
                  </li>
                  <li className={classes.termsBody}>
                    the product is not returned / exchanged by the customer.
                  </li>
                </ol>
              </li>
              <li className={classes.termsBody}>
                The EMI facility is made available to the customers by and in
                the sole discretion of the banks issuing the credit cards.
                Amazon will not be liable for any claims on account of
                availability or non-availability of EMI facility.
              </li>
              <li className={classes.termsBody}>
                Amazon reserves the right to stop No Cost EMI payment option at
                any time without prior notice and without any liability
              </li>
            </ul>
            <Typography className={classes.termsInnerHeading}>
              Terms & Conditions of Bajaj Finance No Cost EMI
            </Typography>
            <Typography className={`${classes.termsBody} ${classes.listItem}`}>
              The following terms & conditions apply to any transactions made
              using BFL EMI Card as a payment option on Amazon.in.
            </Typography>
            <ul className={classes.ulTerms}>
              <li className={`${classes.termsBody} ${classes.listItem}`}>
                The Bajaj Finance No Cost EMI facility is being offered by Bajaj
                Finance Limited (""<b>BFL</b>"") to the customers having a Bajaj
                Finance No Cost EMI card (""<b>Card</b>"").
              </li>
              <li className={classes.termsBody}>
                No Cost EMI (using the Card) as a payment method is available on
                select products sold by participating sellers on{" "}
                <a
                  href="https://www.amazon.in/"
                  className={classes.amazonLink}
                  target="blank"
                >
                  https://www.amazon.in/
                </a>{" "}
                (""<b>Website</b>"").
              </li>
              <li className={classes.termsBody}>
                The Bajaj Finance No Cost EMI facility can only be availed using
                the Card and is not available on purchases made using debit or
                credit cards issued by other banks, net banking or pay on
                delivery payment methods.
              </li>
              <li className={classes.termsBody}>
                As long as all items in the cart are eligible for No cost EMI on
                BFL, you can avail the No Cost EMI with BFL option during
                checkout.
              </li>
              <li className={classes.termsBody}>
                Amazon has no role to play pertaining to the Card including but
                not limited to its issuance, approval, any extension,
                pre-closure, or closure of any facility using the Card and such
                matters are solely determined by BFL.
              </li>
              <li className={classes.termsBody}>
                The customer's use of the Card is also governed by the terms and
                conditions of the agreement between the customers and BFL.
              </li>
              <li className={classes.termsBody}>
                By using the Bajaj Finance No Cost EMI facility, the customers
                hereby release and agree not to bring any claims against Amazon
                in respect of use of the Card or the No Cost EMI facility, and
                all such claims (if any) will lie only against BFL. The
                customers also agree not to bring any claims against Amazon on
                account of availability or non-availability of No Cost EMI
                facility on the Website.
              </li>
              <li className={classes.termsBody}>
                Amazon reserves the right to stop No Cost EMI facility at any
                time without prior notice and without any liability.
              </li>
              <li className={classes.termsBody}>
                Amazon does not charge the customer any processing or
                convenience fee in providing the Bajaj Finance No Cost EMI
                facility.
              </li>
              <li className={classes.termsBody}>
                If an order using the No Cost EMI facility is cancelled, any
                refund to the customers or cancellation of loan facilities using
                the Card will be undertaken by BFL. The customers hereby agree
                that Amazon has no role in this regard and the customers will
                not bring any claims against Amazon for any refund of any amount
                paid to BFL for such order.
              </li>
              <li className={classes.termsBody}>
                Amazon will not be held liable for any dispute arising out of or
                in connection with such No Cost EMI facility or the customer's
                use of the Card on the Website.
              </li>
              <li className={classes.termsBody}>
                Please contact BFL for any queries in relation to the Card.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export const BankOfferModal = (props) => {
  const classes = useStyles();
  const [offer1, setOffer1] = useState(false);
  const [offer2, setOffer2] = useState(false);
  const [backShow, setBackShow] = useState(false);
  const showOffer1 = (val) => {
    setOffer1(val);
    setBackShow(true);
  };
  const showOffer2 = (val) => {
    setOffer2(val);
    setBackShow(true);
  };
  const backClicked = () => {
    setBackShow(false);
    setOffer1(false);
    setOffer2(false);
  };
  return (
    <div>
      {backShow ? (
        <div className={classes.headerDiv}>
          <Typography
            className={`${classes.header} ${classes.backButton}`}
            onClick={backClicked}
          >
            <BiChevronLeft className={classes.leftIcon} />
            Back
          </Typography>
          <Button
            className={classes.close}
            onClick={() => {
              props.toggleDrawer(false);
            }}
          >
            &#10006;
          </Button>
        </div>
      ) : (
        <div className={classes.headerDiv}>
          <Typography className={classes.header}>Bank Offers</Typography>
          <Button
            className={classes.close}
            onClick={() => {
              props.toggleDrawer(false);
            }}
          >
            &#10006;
          </Button>
        </div>
      )}

      {backShow && offer1 && (
        <div className={classes.body}>Offer 1 Clicked</div>
      )}
      {backShow && offer2 && <div className={classes.body}>Offer2</div>}
      {!backShow && (
        <div className={classes.body}>
          <Typography className={classes.offerTitle}>Offer 1</Typography>
          <Typography className={classes.offerDesc}>
            5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card
            Transactions. Minimum purchase value INR 1000
          </Typography>
          <Typography
            className={classes.btn}
            onClick={() => showOffer1(!offer1)}
          >
            See details
            <BiChevronRight className={classes.rightIcon} />
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.offerTitle}>Offer 2</Typography>
          <Typography className={classes.offerDesc}>
            10% Instant Discount up to INR 500 on Bank of Baroda Credit Card
            Transactions. Minimum purchase value INR 2000
          </Typography>
          <Typography
            className={classes.btn}
            onClick={() => showOffer2(!offer2)}
          >
            See details
            <BiChevronRight className={classes.rightIcon} />
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.availOffer}>
            How to avail offer
          </Typography>
          <ul className={classes.ulTerms}>
            <li className={classes.offerDesc}>
              Select eligible card at the time of checkout
            </li>
            <li className={classes.offerDesc}>
              No promo code required to avail the offer
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export const PartnerOffersModal = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.headerDiv}>
        <Typography className={classes.header}>Partner Offers</Typography>
        <Button
          className={classes.close}
          onClick={() => {
            props.toggleDrawer(false);
          }}
        >
          &#10006;
        </Button>
      </div>
      <div className={classes.body}>
        <Typography className={classes.partnerHeading}>
          Get GST invoice and save up to 28% on business purchases.{" "}
          <a
            href="https://www.amazon.in/business/register/org/landing"
            target="blank"
            className={classes.amazonLink}
          >
            Sign up for free
          </a>
        </Typography>
        <div className={classes.promotionTermsDiv}>
          <Typography className={classes.promotionTerms}>
            Promotion Terms
          </Typography>
          <Typography className={classes.termsInnerHeading}>
            Amazon Business provides purchasing solutions that lets registered
            businesses shop for business supplies on Amazon.
          </Typography>
          <Typography className={classes.termsBody}>
            Additionally, you will receive business invoices which would list
            your company/organization name, GST number (if applicable) and
            Purchase Order (PO) number (provided you have added the PO number
            while ordering).
          </Typography>
          <Typography className={classes.termsBody}>
            Want to register for free? Here’s how:
          </Typography>
          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsBody}>
                Create a free business account
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                To register your business, you either need to create a new
                business account on Amazon.in or convert your existing personal
                account on Amazon.in to a business account.
              </Typography>
            </li>
            <Typography className={classes.termsInnerHeading}>Note:</Typography>

            <Typography
              className={`${classes.termsBody} ${classes.noteMargin}`}
            >
              - If you’re converting your Mobile Only Account (MOA) to a
              business account, then you will be required to add an email
              address. Once your business is registered, you either use your
              mobile number or email address to login.
            </Typography>
            <Typography
              className={`${classes.termsBody} ${classes.noteMargin}`}
            >
              - You won’t be able to register your business if you don’t have a
              valid GST number.
            </Typography>
            <Typography
              className={`${classes.termsBody} ${classes.noteMargin}`}
            >
              - Keep your GST certificate handy as you will be prompted to enter
              few details from the certificate.
            </Typography>

            <li>
              <Typography
                className={`${classes.termsBody} ${classes.listItem}`}
              >
                To go through the frequently asked questions (FAQs), visit:
                Amazon Business - FAQs
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                To go through Amazon Business Accounts Terms and Conditions
                (T&Cs), visit: Amazon Business – T&Cs
              </Typography>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

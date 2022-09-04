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
    color: "black",
    fontSize: "1.5rem",
    height: "3rem",
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
    paddingBottom: "2rem",
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
  headerOffer: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  descOffer: {
    fontSize: "1.3rem",
    lineHeight: "1.3",
    margin: "1.5rem 0",
  },
  promotionTermsOffer: {
    fontSize: "1.2rem",
    margin: "1rem",
    fontWeight: "bold",
  },
  "@global": {
    "ol > li": {
      paddingLeft: "1rem",
      marginTop: "0.5rem",
    },
    "ol > li::marker": {
      fontWeight: "bold",
    },
    "table, th, td": {
      border: "2px solid",
      padding: "0.3rem",
      borderCollapse: "collapse",
    },
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
  const dayTh = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const getDate = (val) => {
    const current = new Date();
    const day = current.getDate() + val;
    const d = dayTh(day);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][current.getMonth()];
    const year = current.getFullYear();
    if (val === 0) return day + d + " " + month;

    return day + d + " " + month + " " + year;
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
        <div className={classes.body}>
          <Typography className={classes.headerOffer}>Offer 1</Typography>
          <Typography className={classes.descOffer}>
            5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card
            Transactions. Minimum purchase value INR 1000
          </Typography>
          <Typography className={classes.promotionTermsOffer}>
            Promotion Terms
          </Typography>
          <center>
            <Typography className={classes.termsInnerHeading}>
              Frequently Asked Questions (FAQs)
            </Typography>
          </center>
          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsInnerHeading}>
                What is the offer?
              </Typography>
              <Typography className={classes.termsBody}>
                Get 5% Instant Discount with HSBC Cashback Credit Card, on
                purchase of any eligible product listed on Amazon.in Between
                July 01, 2022 to March 31, 2023. Please check the product page
                for offer eligibility
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                How can I avail this offer?
              </Typography>
              <Typography className={classes.termsBody}>
                Just go through the normal purchase process and checkout with
                the eligible products. On the payment page, please select your
                saved HSBC Bank Card to pay.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                What is the minimum transaction size for the offer?
              </Typography>
              <Typography className={classes.termsBody}>
                As long as Rs. 1,000 is spent on the card for purchase of
                eligible products, you will be eligible for the offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                What is the maximum discount that I can avail?
              </Typography>
              <Typography className={classes.termsBody}>
                The maximum discount possible per HSBC Cashback Credit Card
                across Amazon.in Site and App during the offer period is
                Rs.250/card/month.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                Is discount applicable on debit and credit cards?
              </Typography>
              <Typography className={classes.termsBody}>
                Discount is available only on HSBC Cashback Credit Card.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {" "}
                Can I avail discount on EMI?
              </Typography>
              <Typography className={classes.termsBody}>
                Yes, the discount is applicable on HSBC Cashback Credit Card.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                I did not receive the discount. Why?
              </Typography>
              <Typography className={classes.termsBody}>
                Please make sure you are using an eligible card, and have
                eligible products worth Rs. 1,000 or more in your cart.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {" "}
                What if I cancel my order?
              </Typography>
              <Typography className={classes.termsBody}>
                The Offer is applicable for a successful purchase. If Instant
                Discount is availed on any purchase, and it is subsequently
                cancelled, the refund amount of such purchases will be posted
                adjusting the instant discount amount
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {" "}
                My payment failed while placing the order, will I be eligible
                for the offer?
              </Typography>
              <Typography className={classes.termsBody}>
                If your payment failed while placing the order, Amazon.in gives
                you an option to revise your payment. If you revise your payment
                successfully within the offer duration, you will be eligible for
                the offer. For more information on revise payment,
              </Typography>
            </li>
          </ol>
          <center>
            <u>
              <Typography className={classes.termsInnerHeading}>
                Schedule 1
              </Typography>
            </u>
            <Typography className={classes.termsInnerHeading}>
              Offer Terms and Conditions
            </Typography>
          </center>

          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsBody}>
                This offer ("Offer") is provided by The Hongkong and Shanghai
                Banking Corporation Limited, India ("Bank") and is made
                available on the website amazon.in or the mobile site or mobile
                application thereof (collectively, "Amazon.in") by Amazon Pay
                (India) Private Limited ("Amazon").
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                These Offer terms and conditions ("Offer Terms") are in addition
                to the Amazon.in Conditions of Use & Sale and Privacy Notice to
                which you agree to by using Amazon.in and Terms & Conditions of
                HSBC Cashback Credit Cards. In the event of any conflict between
                the Conditions of Use & Sale and these Offer Terms, these Offer
                Terms will prevail, only for the purposes of this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                All residents of India holding HSBC Cashback Credit Card issued
                by the Bank (each a "Card") are eligible to avail the Offer
                (each a "Cardholder").
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The Offer is valid from July 01, 2022 to March 31, 2023 i.e.
                Always on (collectively "Offer Period"), unless revoked or
                extended by Amazon (in its sole discretion), without any prior
                notice and without any liability.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Under this Offer, any Cardholder who, during the Offer Period,
                purchases any product(s) (each a “Product”, and collectively
                “Products”) on Amazon.in (https://www.amazon.in) and makes
                payment using a Card shall be entitled to receive an instant
                discount of 5% provided that such transaction is equivalent to
                or exceeds INR 1,000 on a per transaction basis. Cardholders
                need to check the offer eligibility on the Product Page.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The maximum discount provided under this Offer will not exceed
                INR 250 per Card per Month.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The Offer is NOT applicable on payment made by customers using
                the 'Card on Delivery' payment option.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The purchase of Product by Cardholders on equated monthly
                instalments (EMI) will also eligible for this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                In case there are multiple items in a purchase order, the
                item-wise savings/discount may vary. However, the overall
                savings/discount on the purchase order will be equivalent to
                maximum savings / discount the Cardholder is eligible for under
                this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                This Offer will not be applicable if the Cardholder or the
                seller or Amazon cancel the order and/or the Cardholder returns
                the Product and, in such a case, participation in the Offer will
                be deemed withdrawn. In such a scenario, only the net amount
                paid by the Cardholder will be refunded. In other words, the
                instant discount will not be refunded.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Amazon and/or the Bank reserve the right to disqualify the
                Cardholder from the benefits of the Offer if any fraudulent
                activity is identified as being carried out for the purpose of
                availing the benefits under the said Offer or otherwise by use
                of the Card.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Amazon and/ or the Bank reserve the right, at any time, without
                prior notice and without assigning any reason whatsoever, to
                add/alter/modify/change or vary any or all of these Offer Terms
                or to replace, wholly or in part, this Offer by another offer,
                whether similar to this Offer or not, or to extend or withdraw
                it altogether.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Delinquent and over-limit Bank's credit card members will not
                qualify for this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Cardholders are not bound in any way to participate in this
                Offer. Any participation is voluntary and the Offer is being
                made purely on a best effort basis.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Nothing herein amounts to a commitment by the Bank or Amazon to
                conduct further, similar or other offers.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The above Offer is by way of a special offer and nothing
                contained herein will prejudice or affect the terms and
                conditions of the Card member agreement. The terms of the above
                schemes will be in addition to and not in derogation of the
                terms contained in the Card member agreement.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                This Offer is not valid on corporate or commercial Cards.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                This Offer is not available on: (i) purchase of products other
                than the Product(s), or (ii) purchase of Product using a card
                other than the Card(s).
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                By participating in this Offer, every Cardholder expressly
                agrees that Bank and Amazon will not be liable or responsible
                for any loss or damage whatsoever that a Cardholder may suffer,
                directly or indirectly, in connection with the Offer including
                but not limited to that associated with his/ her use or delivery
                or misuse of the Product(s). Bank shall not be liable for
                delivery, service, suitability, availability or quality of the
                products offered under this offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                These Offer Terms are governed by the laws of India and the
                courts at New Delhi will have exclusive jurisdiction over any
                matters/ disputes arising out of or in relation to these Offer
                Terms.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Any person availing this Offer will be deemed to have accepted
                these Offer Terms.
              </Typography>
            </li>
            <li>
              <div>
                <Typography className={classes.termsBody}>
                  Notwithstanding anything contained in these Offer Terms, this
                  Offer is not applicable on the purchase of the following
                  products:
                </Typography>
                <ol>
                  <li className={classes.termsBody}>
                    Gift Card(s) (Amazon branded and Non Amazon branded)
                  </li>
                  <li className={classes.termsBody}>Infant Nutrition</li>
                  <li className={classes.termsBody}>
                    Prepaid phone recharges, DTH recharges
                  </li>
                  <li className={classes.termsBody}>
                    Kindle e-books and Kindle Unlimited Subscription Program
                  </li>
                  <li className={classes.termsBody}>Amazon Pay balance</li>
                  <li className={classes.termsBody}>
                    Select Smart/Mobile phones (see product page for offer
                    eligibility)
                  </li>
                  <li className={classes.termsBody}>Gold and Silver coins.</li>
                </ol>
              </div>
            </li>
          </ol>
          <br />
          <br />
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
      {backShow && offer2 && (
        <div className={classes.body}>
          <Typography className={classes.headerOffer}>Offer 2</Typography>
          <Typography className={classes.descOffer}>
            10% Instant Discount up to INR 500 on Bank of Baroda Credit Card
            Transactions. Minimum purchase value INR 2000
          </Typography>
          <Typography className={classes.promotionTermsOffer}>
            Promotion Terms
          </Typography>
          <center>
            <Typography className={classes.termsInnerHeading}>
              Frequently Asked Questions (FAQs)
            </Typography>
          </center>
          <Typography className={classes.offerDesc}>
            <b>Offer period –</b> {getDate(0)} 00:00 HRS to {getDate(3)}{" "}
            23:59HRS
          </Typography>

          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsInnerHeading}>
                What is the BOB Offer?
              </Typography>
              <ol type="a" className={classes.ol}>
                <li className={classes.termsBody}>
                  Get 10% instant discount on BOB Credit Card payment
                  transactions
                </li>
                <li className={classes.termsBody}>
                  Any cancelled, rejected or returned order(s) will not be
                  eligible for the offer and the refund amount of such order
                  will be adjusted with the instant discount amount.
                </li>
              </ol>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                What is the maximum discount that I can avail?
              </Typography>
              <Typography className={classes.termsBody}>
                The maximum discount possible upto INR 2000. Refer the below
                table:
              </Typography>
              <table className={classes.listItem}>
                <thead>
                  <th></th>
                  <th>Min Transaction</th>
                  <th>CC Max Discount</th>
                  <th>CC EMI Max Discount</th>
                </thead>
                <tr>
                  <td>Mobiles</td>
                  <td>7000</td>
                  <td>750</td>
                  <td>1250</td>
                </tr>
                <tr>
                  <td>Fashion</td>
                  <td>2000</td>
                  <td>500</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Other Categories*</td>
                  <td>7000</td>
                  <td>1500</td>
                  <td>2000</td>
                </tr>
              </table>
              <Typography className={classes.termsBody}>
                *Applicable on Electronics, Large appliances, TVs, Home, Kitchen
                categories
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                How can I avail this offer?
              </Typography>
              <Typography className={classes.termsBody}>
                There are no other special steps to avail this offer. Just go
                through the normal purchase process and use your saved BOB card
                to pay
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                Can I get this offer with Exchange offer?
              </Typography>
              <Typography className={classes.termsBody}>
                Yes, the offer is valid on exchange as long as minimum purchase
                value (after Exchange discount) is spent on Bank Card.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                Can I avail discount on card payment for cash on delivery order?
                Are net Banking transactions also included in this Offer?
              </Typography>
              <Typography className={classes.termsBody}>
                COD and Net Banking transactions are NOT included in this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                Would I get the Bank offer even if I make a part payment using
                my Amazon Pay Balance?
              </Typography>
              <Typography className={classes.termsBody}>
                Yes, the offer is available on partial payments as long as
                minimum purchase value is spent on BOB Card. The customer cannot
                use EMI option if Amazon Pay balance is selected.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                Is the offer applicable on EMI?
              </Typography>
              <Typography className={classes.termsBody}>
                Yes, the offer is applicable only on the Credit Card EMI
                payment.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                What if I cancel my order?
              </Typography>
              <Typography className={classes.termsBody}>
                The Offer is applicable for a successful purchase. If Instant
                Discount is availed on any purchase, and it is subsequently
                cancelled, the refund amount of such purchases will be posted
                adjusting the instant discount amount availed on the purchase.
                However, if you place another order within the offer period, you
                shall get instant bank discount subject to offer eligibility.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                My payment failed while placing the order, will I be eligible
                for the cashback?
              </Typography>
              <Typography className={classes.termsBody}>
                If your payment failed while placing the order, Amazon.in gives
                you an option to revise your payment. If you revise your payment
                within the offer duration, you will be eligible for the
                cashback. For more information on revise payment,
              </Typography>
            </li>
          </ol>
          <center>
            <u>
              <Typography className={classes.termsInnerHeading}>
                Schedule 1
              </Typography>
            </u>
            <Typography className={classes.termsInnerHeading}>
              Offer Terms and Conditions
            </Typography>
          </center>

          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsBody}>
                This "<b>Offer</b>" is provided to you by BoB Financial
                Solutions Limited ("<b>Bank</b>") and Amazon Pay (India) Private
                Limited (formerly known as Amazon Online Distribution Services
                Private Limited) ("<b>Amazon</b>") and made available on the
                website{" "}
                <a href="www.amazon.in" className={classes.amazonLink}>
                  www.amazon.in
                </a>{" "}
                and the mobile site and mobile application thereof
                (collectively, "<b>Amazon.in</b>").
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                These Offer terms and conditions ("<b>Offer Terms</b>") are in
                addition to the Amazon.in Conditions of Use & Sale and Privacy
                Notice to which you agree to by using Amazon.in. In the event of
                any conflict between the Conditions of Use & Sale and these
                Offer Terms, these Offer Terms will prevail, only for the
                purposes of this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                All residents of India holding a valid credit card issued by the
                Bank (each a "<b>Card</b>") are eligible to avail the Offer
                (each a "<b>Cardholder</b>").
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The offer is valid in the month of September 2022 i.e. 2nd to
                5th September 2022 ("<b>Offer Period</b>"), unless revoked or
                extended by Amazon in its sole discretion, without any prior
                notice and without liability.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Under this Offer, any Cardholder who, during the Offer Duration,
                makes any purchase Mobiles, Electronics, Large Appliances,
                Furniture, TV, Home & Kitchen categories, Fashion categories
                from Amazon.in and makes the payment using the BOB Credit Card,
                will be entitled to receive an instant discount of 10% of the
                total purchase value for a successful purchase transaction made
                on Amazon.in, provided the purchase value for such transaction
                (inclusive of taxes) is equivalent to or exceeds subject to a
                minimum purchase of INR 7000 per transaction (and INR 2000 for
                Fashion category)
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Each Cardholder can avail a maximum instant discount as per the
                below table on Credit Card and Credit Card EMI payment per Card
                under this Offer for the purchases on Amazon.in using the Card,
                irrespective of number of purchases.
              </Typography>
              <table className={classes.listItem}>
                <thead>
                  <th></th>
                  <th>Min Transaction</th>
                  <th>CC Max Discount</th>
                  <th>CC EMI Max Discount</th>
                </thead>
                <tr>
                  <td>Mobiles</td>
                  <td>7000</td>
                  <td>750</td>
                  <td>1250</td>
                </tr>
                <tr>
                  <td>Fashion</td>
                  <td>2000</td>
                  <td>500</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Other Categories*</td>
                  <td>7000</td>
                  <td>1500</td>
                  <td>2000</td>
                </tr>
              </table>
              <Typography className={classes.termsBody}>
                *Applicable on Electronics, Large appliances, TVs, Home, Kitchen
                categories
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The purchase of the product(s) will be governed by the terms of
                sale, including terms of exchange (wherever available),
                applicable to the sale of the product(s) on Amazon.in. This
                Offer will also be applicable on purchase of product(s) by the
                Cardholders under an exchange offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                While the offers are separate for all categories, max discount
                per card would be 2000 rupees only (which is the highest of all
                the discounts for different categories)
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The Instant Discount would not be applicable on payment made by
                Cardholders using the 'Cash on Delivery' payment option.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The Offer is also valid on EMI (equated monthly installment)
                transactions. Minimum transaction needed to avail EMI on Amazon
                for BOB credit cards is INR 2500.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                In case there are multiple items in a purchase order, the
                item-wise savings/discount may vary. However, the overall
                savings/discount on the purchase order will be equivalent to
                maximum savings / discount the Cardholder is eligible for under
                this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                In the event the order is returned or cancelled by the
                Cardholder, seller or Amazon Seller Services Private Limited,
                for any reason whatsoever, and subsequently the order / purchase
                transaction value falls below INR 7000 (and INR 2000 for Fashion
                category) per transaction on the order will not qualify for this
                Offer and the participation of the Cardholder will be deemed
                withdrawn.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                If Instant Discount is availed on any purchase, and the
                transaction is subsequently cancelled, the refund amount of such
                orders will be post adjusting the instant discount amount
                availed on the purchase.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Amazon reserves the right, at any time, without prior notice,
                without liability, and without assigning any reason whatsoever,
                to add/alter/modify/change or vary all of these Offer Terms or
                to replace, wholly or in part, this Offer by another offer,
                whether similar to this Offer or not.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Nothing contained herein amounts to a commitment by Amazon or
                the Bank to conduct further, similar or other offers.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The above Offer is by way of a special offer and nothing
                contained herein shall prejudice or affect the terms and
                conditions of the card member agreement (if any executed by the
                Bank). The terms of the above schemes shall be in addition to
                and not in derogation of the terms contained in the card member
                agreement.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Delinquent and over-limit Bank's credit Card members will not
                qualify for this Offer.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                This Offer is not valid on corporate or commercial cards issued
                by Bank.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                All disputes between the Cardholders and the Bank will be
                resolved inter se and Amazon will not (nor will be liable or
                obliged to) mediate or resolve any dispute or disagreement
                between the Cardholders and the Bank.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                This Offer cannot be availed on: (i) purchase of the ineligible
                / excluded products mentioned above; or (ii) purchase by
                Cardholder using any card other than the Card (mentioned above).
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Under no circumstances, will the cashback being offered under
                this Offer be settled in cash in lieu thereof by Amazon.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                By participating in this Offer, every Cardholder expressly
                agrees that Amazon or any of its affiliates will not be liable
                or responsible for any loss or damage whatsoever that a
                Cardholder may suffer, directly or indirectly, in connection
                with this Offer, including but not limited to that associated
                with his/her use or delivery or misuse of any product purchased
                on Amazon.in.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                These Offer Terms are governed by the laws of India and the
                courts at New Delhi will have exclusive jurisdiction over any
                matters/disputes arising out of or in relation to these Offer
                Terms.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                The Cardholders are not bound in any way to participate in this
                Offer. Any participation is voluntary and the Offer is being
                made purely on a best effort basis.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Any person availing this Offer shall be deemed to have accepted
                these Offer Terms.
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                Some products might not be eligible for the offer. Please check
                the product detail page for offer eligibility.
              </Typography>
            </li>
          </ol>
          <br />
          <br />
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

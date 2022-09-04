import { Card, Drawer, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  BankOfferModal,
  NoCostEmiModal,
  PartnerOffersModal,
} from "./OffersModal";

const useStyles = makeStyles({
  main: {
    display: "flex",
    margin: "1rem 0",
  },
  card: {
    width: "10vw",
    height: "15vh",
    padding: "0.7rem",
    marginRight: "0.8rem",
    boxShadow: "0px 0px 3px 2px #D3D3D3",
  },
  title: {
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  text: {
    fontSize: "0.85rem",
    lineHeight: "1.1rem",
    marginTop: "0.5rem",
    height: "3.7rem",
    letterSpacing: "0.7px",
  },
  offer: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem",
    color: "#007185",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      color: "#C7511F",
    },
  },
  modal: {
    height: "100vh",
    width: "38vw",
    overflowY: "scroll",
  },
  offerIcon: {
    fontSize: "0.6rem",
    marginLeft: "0.2rem",
  },
});
function Offers() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };
  const showModal = (value) => {
    setModalType(value);
  };
  return (
    <div className={classes.main}>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        transitionDuration={400}
      >
        <div className={classes.modal}>
          {modalType === "NoCostEmiModal" && (
            <NoCostEmiModal toggleDrawer={toggleDrawer} />
          )}
          {modalType === "BankOfferModal" && (
            <BankOfferModal toggleDrawer={toggleDrawer} />
          )}
          {modalType === "PartnerOffersModal" && (
            <PartnerOffersModal toggleDrawer={toggleDrawer} />
          )}
        </div>
      </Drawer>
      <Card className={classes.card}>
        <Typography className={classes.title}>No Cost EMI</Typography>
        <Typography className={classes.text}>
          No Cost EMI available on Amazon Pay Later.
        </Typography>
        <Typography
          className={classes.offer}
          onClick={() => {
            showModal("NoCostEmiModal");
            toggleDrawer(true);
          }}
        >
          1 offer <AiOutlineRight className={classes.offerIcon} />
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Typography className={classes.title}>Bank Offer</Typography>
        <Typography className={classes.text}>
          5% Instant Discount up to INR 250 on HSBC Cashback Ca...
        </Typography>
        <Typography
          className={classes.offer}
          onClick={() => {
            showModal("BankOfferModal");
            toggleDrawer(true);
          }}
        >
          2 offers <AiOutlineRight className={classes.offerIcon} />
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Typography className={classes.title}>Partner Offer</Typography>
        <Typography className={classes.text}>
          Get GST invoice and save up to 28% on business purchases.
        </Typography>
        <Typography
          className={classes.offer}
          onClick={() => {
            showModal("PartnerOffersModal");
            toggleDrawer(true);
          }}
        >
          1 offer <AiOutlineRight className={classes.offerIcon} />
        </Typography>
      </Card>
    </div>
  );
}

export default Offers;

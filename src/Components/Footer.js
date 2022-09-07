import React, { useState } from "react";
import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import amazonLogo from "../Assets/images/amazonLogoFooter.png";
import "react-dropdown/style.css";
import { Popover } from "react-tiny-popover";
import { BsGlobe } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
const useStyles = makeStyles({
  main: {
    width: "100%",
    height: "80vh",
    background: "#232F3E",
  },
  btn: {
    width: "100%",
    height: "10%",
    textAlign: "center",
    background: "#37475A",
    textTransform: "none",
    fontSize: "0.95rem",
    fontWeight: "normal",
    color: "white",
    "&:hover": {
      background: "#485769",
    },
  },
  parentDiv: {
    height: "60%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 7vw",
  },
  childDiv: {
    width: "15%",
    height: "80%",
  },
  childDivException: {
    width: "18%",
    height: "80%",
  },
  heading: {
    fontWeight: "500",
    fontSize: "1.15rem",
    color: "white",
  },
  marginUp: {
    marginTop: "0.5rem",
    fontSize: "0.95rem",
  },
  link: {
    textDecoration: "none",
    color: "#DDDDDD",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  divider: {
    background: "#3A4553",
  },
  lowerFooter: {
    marginTop: "1%",
    height: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    height: "2rem",
    width: "5rem",
    marginRight: "4rem",
  },
  subDiv1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1.5rem",
  },
  iconDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 2rem",
    cursor: "pointer",
    height: "2rem",
    width: "8rem",
    fontSize: "0.9rem",
    color: "#DDDDDD",
    border: "1px solid #848688",
    borderRadius: "0.3rem",
  },
  text: {
    fontSize: "0.9rem",
    color: "#DDDDDD",
    marginLeft: "1rem",
  },
  popover: {
    padding: "1rem",
    background: "white",
    width: "12vw",
    borderRadius: "0.5rem",
    border: "1px solid grey",
    boxShadow: "0.5px 0.5px 5px 0px grey",
  },
  onHover: {
    color: "#444444",
    fontSize: "0.9rem",
    "&:hover": {
      color: "#C7511F",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  subDiv2: {
    width: "80%",
    height: "50%",
  },
  linkText: {
    fontSize: "0.8rem",
    marginLeft: "1rem",
  },
  linkTextCustom: {
    fontSize: "0.8rem",
    marginLeft: "1rem",
    width: "6rem",
    marginTop: "-1rem",
  },
  linkTextCustom1: {
    fontSize: "0.8rem",
    marginLeft: "1rem",
    width: "8rem",
  },
  alignRightItems: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.2rem",
  },
});

function Footer() {
  const classes = useStyles();
  const options = [
    "English - EN",
    "हिन्दी - HI",
    "தமிழ் - TA",
    "తెలుగు - TE",
    "मराठी - MR",
  ];
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className={classes.main}>
      <Button onClick={scroll} className={classes.btn}>
        Back to top
      </Button>
      <div className={classes.parentDiv}>
        <div className={classes.childDiv}>
          <Typography className={classes.heading}>Get to Know Us</Typography>
          <a
            href="https://www.aboutamazon.in/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>About Us</Typography>
          </a>
          <a
            href="https://amazon.jobs/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Careers</Typography>
          </a>
          <a
            href="https://press.aboutamazon.in/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Press Releases</Typography>
          </a>
          <a
            href="https://www.amazon.in/gp/browse.html?node=8872558031"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Amazon Cares</Typography>
          </a>
          <a
            href="https://www.amazon.in/gp/browse.html?node=4594605031"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Gift a Smile</Typography>
          </a>
          <a
            href="https://www.amazon.science/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Amazon Science</Typography>
          </a>
        </div>
        <div className={classes.childDiv}>
          <Typography className={classes.heading}>Connect with Us</Typography>
          <a
            href="https://www.facebook.com/AmazonIN"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Facebook</Typography>
          </a>
          <a
            href="https://twitter.com/AmazonIN"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Twitter</Typography>
          </a>
          <a
            href="https://www.instagram.com/amazondotin/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Instagram</Typography>
          </a>
        </div>
        <div className={classes.childDivException}>
          <Typography className={classes.heading}>
            Make Money with Us
          </Typography>
          <a
            href="https://www.amazon.in/b/?node=2838698031"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Sell on Amazon</Typography>
          </a>
          <a
            href="https://www.amazon.in/b/?node=16192220031"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Sell under Amazon Accelerator
            </Typography>
          </a>
          <a
            href="https://sell.amazon.in/grow-your-business/amazon-global-selling"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Amazon Global Selling
            </Typography>
          </a>
          <a
            href="https://affiliate-program.amazon.in/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Become an Affiliate
            </Typography>
          </a>
          <a
            href="https://sell.amazon.in/sell-online/fulfillment-by-amazon"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Fulfilment by Amazon
            </Typography>
          </a>
          <a
            href="https://advertising.amazon.com/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Advertise Your Products
            </Typography>
          </a>
          <a
            href="https://www.amazonpay.in/merchant"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Amazon Pay on Merchants
            </Typography>
          </a>
        </div>
        <div className={classes.childDivException}>
          <Typography className={classes.heading}>Let Us Help You</Typography>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              COVID-19 and Amazon
            </Typography>
          </a>
          <a
            href="https://www.amazon.in/gp/css/homepage.html"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Your Account</Typography>
          </a>
          <a
            href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fyour-account%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Returns Centre</Typography>
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              100% Purchase Protection
            </Typography>
          </a>
          <a
            href="https://www.amazon.in/gp/browse.html?node=6967393031"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Amazon App Download
            </Typography>
          </a>
          <a
            href="https://www.amazon.in/gp/BIT/theamazonapp/"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>
              Amazon Assistant Download
            </Typography>
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590"
            target="blank"
            className={classes.link}
          >
            <Typography className={classes.marginUp}>Help</Typography>
          </a>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.lowerFooter}>
        <div className={classes.subDiv1}>
          <img src={amazonLogo} alt="" className={classes.logo} />
          <Popover
            isOpen={isPopoverOpen}
            positions={["bottom", "top"]}
            padding={15}
            reposition={true}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={() => (
              <div className={classes.popover}>
                {options.map((option) => {
                  return (
                    <div style={{ display: "flex", margin: "0.8rem" }}>
                      <input type="radio" className={classes.onHover} />
                      <Typography className={classes.onHover}>
                        {option}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            )}
          >
            <div
              className={classes.iconDiv}
              onClick={() => {
                setIsPopoverOpen(!isPopoverOpen);
              }}
            >
              <BsGlobe />
              <Typography className={classes.text}>English</Typography>
              <TiArrowUnsorted />
            </div>
          </Popover>
        </div>
        <div className={classes.subDiv2}>
          <div className={classes.alignRightItems}>
            <a
              href="https://www.amazon.com.au/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Australia</Typography>
            </a>
            <a
              href="https://www.amazon.com.br/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Brazil</Typography>
            </a>
            <a
              href="https://www.amazon.ca/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Canada</Typography>
            </a>
            <a
              href="https://www.amazon.cn/"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>China</Typography>
            </a>
            <a
              href="https://www.amazon.fr"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>France</Typography>
            </a>
            <a
              href="https://www.amazon.de"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Germany</Typography>
            </a>
            <a
              href="https://www.amazon.it"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Italy</Typography>
            </a>
            <a
              href="https://www.amazon.co.jp"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Japan</Typography>
            </a>
            <a
              href="https://www.amazon.com.mx"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Mexico</Typography>
            </a>
            <a
              href="https://www.amazon.nl"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Netherlands</Typography>
            </a>
            <a
              href="https://www.amazon.pl"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Poland</Typography>
            </a>
            <a
              href="https://www.amazon.sg"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Singapore</Typography>
            </a>
            <a
              href="https://www.amazon.es"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Spain</Typography>
            </a>
            <a
              href="https://www.amazon.com.tr"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkText}>Turkey</Typography>
            </a>
            <a
              href="https://www.amazon.ae"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkTextCustom1}>
                United Arab Emirates
              </Typography>
            </a>
          </div>
          <div className={classes.alignRightItems}>
            <a
              href="https://www.amazon.co.uk"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkTextCustom}>
                United Kingdom
              </Typography>
            </a>
            <a
              href="https://www.amazon.com"
              target="blank"
              className={classes.link}
            >
              <Typography className={classes.linkTextCustom}>
                United States
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

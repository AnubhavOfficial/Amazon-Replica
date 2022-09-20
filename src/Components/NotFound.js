import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import amazonLogo from "../Assets/images/amazonLogoBlack.png";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "8rem",
    height: "2.5rem",
    marginTop: "0.2rem",
  },
  innerDiv: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#CC6600",
    marginRight: "1rem",
  },
  heading: {
    color: "#E47911",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  text: {
    fontWeight: "bold",
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
  },
  icon2: {
    color: "#CC6600",
    margin: "0 0.4rem",
  },
  link: {
    color: "#CC6600",
    margin: "0 0.4rem",
  },
});
function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Link to="/">
        <img src={amazonLogo} alt="" className={classes.image} />
      </Link>
      <div className={classes.innerDiv}>
        <FaRegQuestionCircle className={classes.icon} />
        <div>
          <Typography className={classes.heading}>
            Looking for something?
          </Typography>
          <Typography className={classes}>
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </Typography>
          <Typography className={classes.text}>
            {" "}
            <AiFillCaretRight className={classes.icon2} />
            Go to Amazon.in's{" "}
            <a href="/" className={classes.link}>
              {" "}
              Home
            </a>{" "}
            Page
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

import React, { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import amazonLogo from "../Assets/images/amazonLogo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Search } from "@material-ui/icons";
import ReactCountryFlag from "react-country-flag";
import { AiOutlineCaretDown } from "react-icons/ai";

const useStyles = makeStyles({
  appbar: {
    background: "#131921",
  },
  logo: {
    width: "6.7rem",
    height: "1.9rem",
    marginTop: "0.2rem",
  },
  location: {
    display: "flex",
    alignItems: "end",
    margin: "0.2rem 0 0 0.75rem",
    cursor: "pointer",
    padding: "0.5rem 0.25rem",
    "&:hover": {
      outline: "1px solid",
    },
  },
  icon: {
    marginRight: "0.1rem",
  },
  text: {
    fontSize: "0.7rem",
    lineHeight: 0.5,
    cursor: "pointer",
    color: "#CCCCCC",
  },
  text2: {
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  searchbar: {
    width: "50vw",
    marginLeft: "1rem",
    height: "2.5rem",
    borderRadius: "0.3rem",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: "none",
    fontSize: "1rem",
    outline: "none",
    "&:focus": {
      outline: "1px solid #FEBD69",
    },
  },
  searchBtn: {
    width: "3rem",
    minWidth: "2rem",
    height: "2.6rem",
    borderRadius: "0.3rem",
    border: "none",
    background: "#FEBD69",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "&:hover": {
      background: "#FEBD69",
    },
  },
  searchIcon: {
    width: "2rem",
    height: "2rem",
  },
  headerButton: {
    margin: "0.2rem 0 0 0.75rem",
    padding: "0.5rem 0.25rem",
    "&:hover": {
      outline: "1px solid",
    },
  },
  flagDiv: {
    display: "flex",
    alignItems: "end",
    marginTop: "0.4rem",
    justifyContent: "end",
  },
  downIcon: {
    fontSize: "0.7rem",
    marginLeft: "0.3rem",
  },
});

function NavBar() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const onSignIn = () => {
    if (signedIn) {
      setSignedIn(false);
      setName("");
    } else {
      setSignedIn(true);
      setName("Anubhav");
    }
  };
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Link to="/">
            <img className={classes.logo} src={amazonLogo} alt="" />
          </Link>
          <div className={classes.location} onClick={() => alert("Clicked")}>
            <div>
              <HiOutlineLocationMarker
                size="1.15rem"
                className={classes.icon}
              />
            </div>
            <div>
              <Typography className={classes.text}>Hello {name}</Typography>
              <Typography className={classes.text2}>
                Select your address
              </Typography>
            </div>
          </div>
          <div className={classes.search}>
            <input type="text" className={classes.searchbar}></input>
            <Button className={classes.searchBtn}>
              <Search className={classes.searchIcon} />
            </Button>
          </div>
          <div className={classes.headerButton}>
            <Typography className={classes.text}>English</Typography>
            <Typography className={classes.flagDiv}>
              <ReactCountryFlag countryCode="IN" svg className={classes.flag} />
              <AiOutlineCaretDown className={classes.downIcon} />
            </Typography>
          </div>
          <div className={classes.headerButton}>
            <Typography className={classes.text}>
              Hello {signedIn ? name : "Guest"}
            </Typography>
            <Typography className={classes.text2} onClick={onSignIn}>
              {name ? "Sign out" : "Sign in"}
            </Typography>
          </div>
          <div className={classes.headerButton}>
            <Typography className={classes.text}>Returns</Typography>
            <Typography className={classes.text2}>& Orders</Typography>
          </div>
          <Link
            to="/Cart"
            style={{ fontSize: "1.3rem", color: "white", marginLeft: "2rem" }}
          >
            Cart
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

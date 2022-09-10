import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import amazonLogo from "../Assets/images/amazonLogo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Search } from "@material-ui/icons";
import ReactCountryFlag from "react-country-flag";
import { AiOutlineCaretDown } from "react-icons/ai";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import setUserAction from "../Actions/setUserAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SignedInAction from "../Actions/SignedInAction";

const useStyles = makeStyles({
  appbar: {
    background: "#131921",
  },
  toolbar: {
    margin: 0,
    paddingLeft: "1rem",
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
    width: "49vw",
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
    height: "2.7rem",
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
    margin: "0.2rem 0.4rem 0 0.5rem",
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
  cart: {
    fontSize: "0.9rem",
    textDecoration: "none",
    color: "white",
    marginLeft: "0.8rem",
    display: "flex",
    alignItems: "end",
  },
  header_cart: {
    display: "flex",
    textAlign: "end",
    justifyContent: "end",
    position: "relative",
    marginRight: "0.3rem",
  },
  cartItems: {
    position: "absolute",
    width: "1rem",
    height: "1rem",
    top: "-1.2rem",
    borderRadius: "50%",
    background: "red",
    color: "#fff",
    boxSizing: "border-box",
    fontSize: "0.7rem",
    display: "flex",
    justifyContent: "center",
  },
  cartIcon: {
    fontSize: "1.9rem",
  },
  linkBtn: {
    textDecoration: "none",
    color: "white",
  },
});

function NavBar() {
  const classes = useStyles();
  const initialUserState = {
    uid: "",
    email: "",
    emailVerified: false,
    displayName: "",
    isAnonymous: false,
    providerData: [
      {
        providerId: "",
        uid: "",
        displayName: "",
        email: "",
        phoneNumber: null,
        photoURL: null,
      },
    ],
    stsTokenManager: {
      refreshToken: "",
      accessToken: "",
      expirationTime: 0,
    },
    createdAt: "",
    lastLoginAt: "",
    apiKey: "",
    appName: "[DEFAULT]",
  };

  const name = useSelector((state) => state.user.displayName);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const onSignOut = async () => {
    dispatch(setUserAction(initialUserState));
    dispatch(SignedInAction(false));
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>Success</DialogTitle>
            <DialogContent>
              <Typography style={{ whiteSpace: "pre-line" }}>
                You have been Logged out successfully!
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Okay</Button>
            </DialogActions>
          </Dialog>
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
          {name ? (
            <div className={classes.headerButton} onClick={onSignOut}>
              <Typography className={classes.text}>Hello {name}</Typography>
              <Typography className={classes.text2}>Sign out</Typography>
            </div>
          ) : (
            <Link to="/Login" className={classes.linkBtn}>
              <div className={classes.headerButton}>
                <Typography className={classes.text}>Hello Guest</Typography>
                <Typography className={classes.text2}>Sign in</Typography>
              </div>
            </Link>
          )}

          <div className={classes.headerButton}>
            <Typography className={classes.text}>Returns</Typography>
            <Typography className={classes.text2}>& Orders</Typography>
          </div>
          <Link to="/Cart" className={classes.cart}>
            <div className={classes.header_cart}>
              <ShoppingCartOutlinedIcon className={classes.cartIcon} />
              <p className={classes.cartItems}>{cartCount}</p>
            </div>
            Cart
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

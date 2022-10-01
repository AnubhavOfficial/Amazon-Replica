import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import amazonLogo from "../Assets/images/amazonLogoBlack.png";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import setUserAction from "../Actions/setUserAction";
import SignedInAction from "./../Actions/SignedInAction";

const useStyles = makeStyles({
  upperDiv: {
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    paddingBottom: "1rem",
  },
  image: {
    width: "8.2rem",
    height: "2.6rem",
  },
  formDiv: {
    height: "20rem",
    width: "19rem",
    margin: "1rem",
    padding: "1rem 2rem",
    border: "0.1rem solid rgba(148, 148, 148, 0.5)",
    borderRadius: "0.3rem",
  },
  label: {
    fontWeight: "bold",
    fontSize: "0.85rem",
    letterSpacing: "0.05rem",
  },
  input: {
    width: "18.5rem",
    height: "1.5rem",
    border: "0.1rem solid #949494",
    margin: "0.3rem 0 0.7rem 0",
    padding: "0.2rem",
    fontSize: "0.85rem",
    borderRadius: "0.2rem",
    outline: "none",
    "&:focus": {
      boxShadow: "0 0 0.2rem 0.1rem #D18637 ",
      border: "1px solid orange",
    },
    "&::placeholder": {
      fontSize: "0.85rem",
    },
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  submitBtn: {
    background: "linear-gradient(to bottom,#F7DDA0,#F0C14B)",
    border: "0.1rem solid #A88734",
    borderRadius: "0.2rem",
    fontSize: "0.9rem",
    marginTop: "1rem",
    width: "19rem",
    height: "1.8rem",
    cursor: "pointer",
    "&:hover": {
      background: "linear-gradient(to top,#EEB934,#F4D485)",
    },
  },
  conditions: {
    fontSize: "0.8rem",
    margin: "1rem 0",
  },
  link: {
    textDecoration: "none",
    color: "#0066C0",
    fontSize: "0.8rem",
    "&:hover": {
      color: "#C45500",
      textDecoration: "underline",
    },
  },
  divider: {
    width: "23rem",
    fontSize: "0.8rem",
    color: "#767676",
    padding: 0,
  },
  createNewAccountbutton: {
    width: "23rem",
    height: "1.8rem",
    fontSize: "0.9rem",
    border: "0.1rem solid #8D9096",
    marginTop: "1rem",
    borderRadius: "0.2rem",
    cursor: "pointer",
    background: "linear-gradient(to top,#E7E9EC,#FBFCFD)",
    "&:hover": {
      background: "linear-gradient(to top,#DADDE2,#F5F7F9)",
    },
  },
  lowerDiv: {
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    marginTop: "1rem",
    height: "5rem",
    borderTop: "0.15rem solid #d9d7d7",
  },
  footerConditionsDiv: {
    width: "20%",
    display: "flex",
    justifyContent: "space-around",
  },
  copyright: {
    fontSize: "0.75rem",
    color: "#555555",
    marginTop: "0.5rem",
  },
});
function Login() {
  const classes = useStyles();
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    var form = document.getElementById("form");
    var emailCheck = document.getElementById("email");
    var passwordCheck = document.getElementById("password");

    if (form.checkValidity()) {
      auth
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          var user = auth.currentUser;
          dispatch(setUserAction(user));
          dispatch(SignedInAction(true));
          navigate(-1);
        })
        .catch((e) => {
          console.log(e);
          var index = e.message.search("password");
          index === -1
            ? setError(e.message + "\n\n Create a new account for this email")
            : setError(
                e.message +
                  "\n\n Please enter the correct password for this account"
              );

          setOpen(true);
        });
    } else {
      !passwordCheck.checkValidity() &&
        setError("Please enter the password to continue");
      !emailCheck.checkValidity() &&
        setError("Please enter valid email address");
      setOpen(true);
      !emailCheck.checkValidity() &&
        !passwordCheck.checkValidity() &&
        setError("Please enter all the fields to continue");
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.upperDiv}>
        <Link to="/">
          <img src={amazonLogo} alt="" className={classes.image} />
        </Link>
        <div className={classes.formDiv}>
          <Typography className={classes.heading}>Sign in </Typography>
          <form id="form">
            <Typography className={classes.label}>
              Email or mobile phone number
            </Typography>
            <input
              type="email"
              id="email"
              className={classes.input}
              required
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Typography className={classes.label}>Password</Typography>
            <input
              type="password"
              id="password"
              required
              className={classes.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button
              type="submit"
              className={classes.submitBtn}
              onClick={signIn}
            >
              Sign in
            </button>
          </form>
          <Typography className={classes.conditions}>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
              target="blank"
              className={classes.link}
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
              target="blank"
              className={classes.link}
            >
              Privacy Notice
            </a>
            .
          </Typography>
        </div>
        <Divider
          className={classes.divider}
          textAlign="center"
          sx={{ borderBottomWidth: "50px" }}
        >
          New to Amazon?
        </Divider>
        <Link to="/SignUp">
          <button className={classes.createNewAccountbutton}>
            Create your Amazon account
          </button>
        </Link>
      </div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Oops😢 an Error Occured"}</DialogTitle>
        <DialogContent>
          <Typography style={{ whiteSpace: "pre-line" }}>{error}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
      <div className={classes.lowerDiv}>
        <div className={classes.footerConditionsDiv}>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
            target="blank"
            className={classes.link}
          >
            Conditions of Use
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
            target="blank"
            className={classes.link}
          >
            Privacy Notice
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
            target="blank"
            className={classes.link}
          >
            Help
          </a>
        </div>
        <Typography className={classes.copyright}>
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </Typography>
      </div>
    </div>
  );
}

export default Login;

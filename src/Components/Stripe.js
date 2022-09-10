import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import axios from "axios";

const CARD_OPTIONS = {
  iconsStyle: "solid",
  style: {
    base: {
      iconColor: "green",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto",
      fontSize: "1rem",
    },
    invalid: {
      iconColor: "red",
      color: "white",
    },
  },
};
function Stripe() {
  // Stripe Variables
  const stripe = useStripe();
  const elements = useElements();

  const handleClick = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:5000/create-checkout-session",
          {
            amount: 1000,
            id,
          }
        );
        if (response.data.success) {
          console.log("successful Payment");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleClick}>
      <fieldset>
        <div>
          <CardElement options={CARD_OPTIONS} />
        </div>
      </fieldset>
      <button type="submit">Buy the product </button>
    </form>
  );
}

export default Stripe;

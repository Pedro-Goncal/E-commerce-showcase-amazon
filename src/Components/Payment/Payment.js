/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../Reducer/Reducer";
import axios from "../../axios";
import { db } from "../../firebase";

//Style
import "./Payment.css";

//Components
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true); //When we tell Stripe we have a payment we ask stipe to send us a client secret

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true); //Stops the user from click the botton multiple times

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        //push the basket after payment to the data base
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    //Listen to any changes in the CardElement
    //and display any error as the user types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ( <Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Addressed</h3>
          </div>
          <div className="payment__address">
            <p>
              {user
                ? `${user?.email}`
                : "Please Sign in to complete your payment"}
            </p>
            <p>123 React Lane</p>
            <p>Planet Earth, SS</p>
            <p>31415</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement
                onChange={handleChange}
                className="payment__cardForm"
              />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={processing || disabled || succeeded} //This stops the user from clicking the botton multiple times
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

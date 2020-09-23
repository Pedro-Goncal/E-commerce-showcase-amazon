import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//Style
import "./App.css";

//Containers
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/LoginPage/Login";
import Payment from "./Components/Payment/Payment";
import Orders from "./Components/Orders/Orders";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrolToTop/ScrollToTop";

const promise = loadStripe(
  "pk_test_51HQDhlKMuIhlMruhGA0GRsPlGzM4fCVoq87A2XdwabOBUJr5xsUHSBdvpqNsi1NnQfTjQiRppAb3oSohSgjD3AA900p8op2zf3"
);

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    //BEM STYLING CONVENTION??
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <ScrollToTop />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

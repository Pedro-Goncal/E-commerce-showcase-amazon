import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrolToTop/ScrollToTop";
import emptyCart from "../../emptycart.png";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg"
          alt="banner"
          className="checkout__add"
        />

        <div>
          <h5>
            {user ? `Hello ${user?.email}` : "Hello Guest, please Sign in"}
          </h5>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.length < 1 && (
            <div className="checkout__emptyBasket">
              <img
                className="checkout__emptyBasketImg"
                src={emptyCart}
                alt="empty basket"
              />
              <Link to="./">
                <p className="checkout__emptyBasket__line1">
                  Your cart seems to be empty
                </p>
                <p className="checkout__emptyBasket__line2">
                  Click here to shop for your favourit items
                </p>
              </Link>
            </div>
          )}
          {basket.map((item) => (
            <CheckoutProducts
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {basket.length >= 1 && <ScrollToTop />}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

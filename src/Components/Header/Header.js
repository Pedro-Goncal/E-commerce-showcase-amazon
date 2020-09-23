import React, { useState, useEffect } from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOn from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const [geo, setGeo] = useState([]);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  useEffect(() => {
    async function fetchGeo() {
      fetch(
        "https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3"
      )
        .then((response) => response.json())
        .then((data) => setGeo(data));
    }
    fetchGeo();
  }, []);

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div className="header__option" onClick={handleAuthentication}>
              <p className="header__optionLineOne">
                {user ? `Hello, ${user?.email}` : "Hello Guest"}
              </p>
              <p className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </p>
            </div>
          </Link>

          <Link to="./orders">
            <div className="header__option">
              <p className="header__optionLineOne">Returns</p>
              <p className="header__optionLineTwo"> & Orders</p>
            </div>
          </Link>
          <div className="header__option">
            <p className="header__optionLineOne">Your</p>
            <p className="header__optionLineTwo">Prime</p>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <p className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="second__header">
        <div className="second__header__icon">
          <LocationOn />
        </div>
        <div className="second__header__location">
          <p className="second__header__location__delivers">
            Delivers to {user ? user?.email : null}
          </p>
          <p className="second__header__location__location">
            {geo.city} {geo.postal}
          </p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">Toda's Deals</p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">User's Amazone.com</p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">Customer Service</p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">Browsing History</p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">Buy again</p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">Gift Cards</p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">Registry</p>
        </div>

        <div className="second__header__titles border">
          <p className="Second__header__subTitles">Sell</p>
        </div>
        <div className="second__header__covid border">
          <p className="Second__header__location">
            Amazon's response to COVID-19
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;

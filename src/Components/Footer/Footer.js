import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__links">
          <h3>Get to know US</h3>
          <div className="footer__linksSmall links1">
            <p>Carreers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Tours</p>
          </div>
        </div>
        <div className="footer__links">
          <h3>Make Money with Us</h3>
          <div className="footer__linksSmall links2">
            <p>Sell products on Amazon</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
          </div>
        </div>
        <div className="footer__links">
          <h3>Amazon Payment Products</h3>
          <div className="footer__linksSmall links3">
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
          </div>
        </div>
        <div className="footer__links">
          <h3>Let Us Help You</h3>
          <div className="footer__linksSmall links4">
            <p>Amazon and COVID-19</p>
            <p>Your Account</p>
            <Link to="/orders">
              <p>Your Orders</p>
            </Link>
            <p>Shipping Rates & Policies</p>
            <p>Amazon Prime</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Assistant</p>
            <p>Help</p>
          </div>
        </div>
      </div>
      <div className="footer__subFooter">
        <img
          className="header__logo footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
        <span className="footer__subFooter__p">
          Made By &nbsp;
          <a
            className="footer__subFooter_link"
            href="https://www.linkedin.com/in/pedro-goncalves-b57b681b7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedro Gonçalves
          </a>
          <p className="footer__subFooter__disclaimer">Disclaimer</p>
          <p className="footer__subFooter__disclaimer">
            This website has nothing to do with amazon.
          </p>
          <p className="footer__subFooter__disclaimer">
            For showcase pourpouses only.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, facebookAuth, googleAuth } from "../../firebase";

import GoogleButton from "react-google-button";
import FacebookLogin from "react-facebook-login";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //Firebase login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //Fire Base register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const facebook = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(facebookAuth)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.credentrial));
  };

  const google = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(googleAuth)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.credentrial));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signinButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <div className="login__fgContainer">
          <div>
            <GoogleButton
              className="login__google"
              type="light" // can be light or dark
              onClick={google}
            />
          </div>
          <div className="login__facebook">
            <FacebookLogin
              appId="972555116568268"
              autoLoad={true}
              textButton="Sign in with Facebook"
              fields="name,email,picture"
              scope="public_profile,user_friends,user_actions.books"
              size="small"
              onClick={facebook}
              icon="fa-facebook"
            />
          </div>
        </div>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Same.
        </p>
        <p>
          Sign in/Sign up with firebase User authentication Or Google and
          Facebook authentication
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

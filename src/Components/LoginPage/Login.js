import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';


function Login() {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = e => {
      e.preventDefault();

      //Firebase login logic
      auth
         .signInWithEmailAndPassword(email, password)
         .then(auth => {
            history.push('/')
         })
         .catch(error => alert(error.message))
   }

   const register = e => {
      e.preventDefault();

      //Fire Base register logic
      auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            if (auth){
               history.push('/')
            }
         })
         .catch(error => alert(error.message))
   }

   return (
      <div className="login">
         <Link to='/'>
            <img
               className="login__logo" 
               src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
               alt="amazon logo"/>
         </Link>

         <div className='login__container'>
            <h1>Sign in</h1>
            <form>
               <h5>E-mail</h5>
               <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

               <h5>Password</h5>
               <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

               <button
                  type='submit'
                  className="login__signinButton"
                  onClick={signIn}
               >
               Sign In
               </button>
                  
            </form>
            <p>
               By signing-in you agree to the AMAZON FAKE CLONE
               Conditions of Use & Same. Please see our 
               Privacy Notice, our Cookies Notice and out Interest-Base Ads Notice
            </p>

            <button
               onClick={register}
               className="login__registerButton"
            >
               Create your Amazon Account
            </button>
         </div>

      </div>
   )
}

export default Login;
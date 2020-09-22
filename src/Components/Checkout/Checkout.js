import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider/StateProvider';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import FlipMove from 'react-flip-move';

function Checkout() {
   const [{ basket, user }, dispatch] = useStateValue();

   return (
      <div className="checkout">
         <div className="checkout__left">
            <img 
               src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg"
               alt="banner"
               className="checkout__add"
            />

            <div>
               <h5>{user ? `Hello ${user?.email}` : 'Hello Guest, please Sign in'}</h5>
               <h2 className="checkout__title">Your Shopping Basket</h2>
               
                     {basket.map( item => (
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

         <div className="checkout__right">
            <Subtotal />
         </div>
      </div>
   )
}

export default Checkout;

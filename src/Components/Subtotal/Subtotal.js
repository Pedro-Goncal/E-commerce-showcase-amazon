import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider/StateProvider';
import { getBasketTotal } from '../../Reducer/Reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
   const [{ basket}, dispatch] = useStateValue();
   const history = useHistory();

   return (
      <div className="subtotal">
         <CurrencyFormat
            renderText={(value)=> (
               <>
                  <p>
                     Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                  </p>
                  <smal className='subtotal__gift'>
                     <input type="checkbox" />
                     This Order contains a gift
                  </smal>
               </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
      </div>
   )
}

export default Subtotal

//npm install react-currency-format

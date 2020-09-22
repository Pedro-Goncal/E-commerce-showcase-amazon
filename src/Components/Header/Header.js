import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider/StateProvider';
import { auth } from '../../firebase';

function Header() {
   const [{ basket, user }, dispatch] = useStateValue();

   const handleAuthentication = () => {
      if (user) {
         auth.signOut();
      }
   }

   return (
      <div>
      <div className='header'>
         <Link to='/'>
            <img 
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt="logo"
            />
         </Link>

         <div className="header__search">
            <input
               className='header__searchInput'
               type="text"/>
               <SearchIcon className='header__searchIcon' />
         </div>

         <div className="header__nav">

            <Link to={!user && '/login'}>
               <div 
                  className='header__option'
                  onClick={handleAuthentication}
               >
                  <span className='header__optionLineOne'>{user ? `Hello, ${user?.email}` : 'Hello Guest'}</span>
                  <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
               </div>
            </Link>

            <Link to='./orders'>
            <div className='header__option'>
               <span className='header__optionLineOne'>Returns</span>
               <span className='header__optionLineTwo'> & Orders</span>
            </div>
            </Link>
            <div className='header__option'>
               <span className='header__optionLineOne'>Your</span>
               <span className='header__optionLineTwo'>Prime</span>
            </div>

            <Link to="/checkout">
               <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <spam className="header__optionLineTwo header__basketCount">
                     {basket?.length}
                  </spam>
               </div>
            </Link>

         </div>
      </div>
         <div className="second__header">
         <div className="second__header__location">
            <span className='header__location'>Returns</span>
            <span className='header__location'>Returns</span>
         </div>
      </div>
   </div>
   )
} 

export default Header;
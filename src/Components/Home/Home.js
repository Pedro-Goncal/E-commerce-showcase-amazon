import React from 'react'
import './Home.css';

import Product from '../Product/Product';

function Home() {
   return (
      <div className="home">
         <div className='home__container'>
            <img 
            className="home__image"
               src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
               alt="banner" />

               <div className="home__row">
                  <Product
                     id="12321341" 
                     title="The Haunting of H.G. Wells"
                     price={29.99}
                     image="https://m.media-amazon.com/images/I/51HvL015VmL._SY346_.jpg"
                     rating={3}
                  /> 
                  <Product
                     id="49538094"
                     title="KitchenAid KSM180QHSD 100 Year Limited Edition Queen of Hearts Stand Mixer, Passion Red "
                     price={239.00}
                     rating={4}
                     image="https://images-na.ssl-images-amazon.com/images/I/81LBhCVGIPL._AC_SL1500_.jpg"
                  />
               </div>

               <div className="home__row">
                  <Product
                     id="49687094"
                     title="Huawei P30 128GB+6GB RAM (ELE-L29) 6.1 LTE Factory Unlocked GSM "
                     price={489.80}
                     rating={5}
                     image="https://images-na.ssl-images-amazon.com/images/I/61jJeZBliWL._AC_SL1000_.jpg"/>
                  <Product
                     id="65489432"
                     title="AMD Ryzen Threadripper 2950X Processor, 16 Cores and 32 Processing Threads"
                     price={1031.00}
                     rating={5}
                     image="https://images-na.ssl-images-amazon.com/images/I/61DQNLHa6BL._AC_SL1442_.jpg"/>
                  <Product
                     id="49963094"
                     title="Bose SoundLink Mini II Limited Edition Bluetooth Speaker"
                     price={198.00}
                     rating={4}
                     image="https://images-na.ssl-images-amazon.com/images/I/71hbVUUbYWL._AC_SL1500_.jpg"/>
               </div>

               <div className="home__row">
               <Product
                  id="35538094"
                  title="Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business, 100 Hz, USB-C, HDMI, DP, 3"
                  price={629.99}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._AC_SL1500_.jpg"/>
               </div>
         </div>
      </div>
   )
}


export default Home

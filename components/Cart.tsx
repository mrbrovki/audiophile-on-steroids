import React, { useState } from 'react';
import styles from '../styles/css/cart.module.css';
import CartItems from './CartItems';

const Cart = () => {
 const [showCartItems, setShowCartItems] = useState(false);
 const handleCartClick = () => {
  setShowCartItems(prev => prev === true? false: true);
 }

  return (
   <>
    <div className={styles.cart_clicker} onClick={handleCartClick}>
      <img className={styles.cart_icon} src='/assets/shared/desktop/icon-cart.svg'/>
     </div>
    {showCartItems && 
      <CartItems />
    }
   </>
  )
}

export default Cart
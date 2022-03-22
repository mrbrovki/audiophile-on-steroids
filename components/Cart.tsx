import React, { FC, useState} from 'react';
import styles from '../styles/css/cart.module.css';
import CartItems from './CartItems';

interface CartProps{
  toggleCart: () => void;
  closeCart: () => void;
  showCart: boolean;
}

const Cart:FC<CartProps> = ({toggleCart, closeCart, showCart}) => {
  
  return (
   <>
    <div className={styles.cart_clicker} onClick={toggleCart}>
      <img className={styles.cart_icon} src='/assets/shared/desktop/icon-cart.svg'/>
     </div>
     {showCart && <CartItems />}
   </>
  )
}

export default Cart
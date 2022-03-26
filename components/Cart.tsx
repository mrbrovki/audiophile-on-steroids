import React, { FC} from 'react';
import styles from '../styles/css/cart.module.css';
import CartItems from './CartItems';
import Image from 'next/image';

interface CartProps{
  toggleCart: () => void;
  closeCart: () => void;
  showCart: boolean;
}

const Cart:FC<CartProps> = ({toggleCart, closeCart, showCart}) => {
  return (
   <>
    <div className={styles.cart_clicker} onClick={toggleCart}>
      <Image className={styles.cart_icon} src='/assets/shared/desktop/icon-cart.svg' height={24} width={24}/>
      {showCart && <CartItems />}
     </div>
   </>
  )
};

export default Cart;
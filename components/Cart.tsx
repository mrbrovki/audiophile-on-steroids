import React, { FC} from 'react';
import Image from 'next/image';

//  components
import CartItems from './CartItems';

//  types
import { CartProps } from '../lib/Types';

//  styles
import styles from '../styles/css/cart.module.css';



const Cart:FC<CartProps> = ({toggleCart, closeCart, showCart}) => {
  return (
   <>
    <div className={styles.cart_clicker} onClick={toggleCart}>
      <Image className={styles.cart_icon} src='/assets/shared/desktop/icon-cart.svg' height={24} width={24} alt='cart'/>
      {showCart && <CartItems />}
     </div>
   </>
  );
};

export default Cart;
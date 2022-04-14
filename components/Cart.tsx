import React, { FC, useContext} from 'react';
import Image from 'next/image';

//  components
import CartItems from './CartItems';

//  types
import { CartProps } from '../lib/Types';

//  styles
import styles from '../styles/css/cart.module.css';
import { Context } from '../pages/_app';



const Cart:FC = () => {
  const {state: {isCartVisible}, dispatch} = useContext(Context);

  const toggleCart = () =>{
    if(isCartVisible === false){
      dispatch({type:'CART', payload: true});
      dispatch({type: 'OVERLAY', payload: true});
    }
    else{
      dispatch({type:'CART', payload: false});
      dispatch({type: 'OVERLAY', payload: false});
    }
  };

  return (
   <>
    <div className={styles.cart_clicker} onClick={toggleCart}>
      <Image className={styles.cart_icon} src='/assets/shared/desktop/icon-cart.svg' height={24} width={24} alt='cart'/>
      {isCartVisible && <CartItems />}
     </div>
   </>
  );
};

export default Cart;
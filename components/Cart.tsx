import React, { FC, useContext} from 'react';
import { Context } from '../pages/_app';
import Image from 'next/image';

//  components
import CartItems from './CartItems';

//  styles
import styles from '../styles/css/cart.module.css';



const Cart:FC = () => {
  const {state: {isCartVisible}, dispatch} = useContext(Context);

  const toggleCart = () =>{
    if(isCartVisible === false){
      dispatch({type: 'NAVBAR', payload: 'hidden'});
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
     </div>
    {isCartVisible && <CartItems />}
   </>
  );
};

export default Cart;
import React, { FC} from 'react';
import Image from 'next/image';
//  components
import CartItems from './CartItems';
//  styles
import styles from '../styles/css/cart.module.css';
//  features
import { setNavBarVisibility } from '../features/navigation/navSlice';
import { setCartVisibility } from '../features/cart/cartSlice';
import { setOverlayVisibility } from '../features/overlay/overlaySlice';
//  hooks
import { useAppDispatch, useAppSelector } from '../hooks';



const Cart:FC = () => {
  const isCartVisible = useAppSelector(state=>state.cart.isCartVisible)
  const dispatch = useAppDispatch();
  const toggleCart = () =>{
    if(isCartVisible === false){
      dispatch(setNavBarVisibility(false));
      dispatch(setCartVisibility(true));
      dispatch(setOverlayVisibility(true));
    }
    else{
      dispatch(setCartVisibility(false));
      dispatch(setOverlayVisibility(false));
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
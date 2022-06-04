import React, { FC } from 'react';
import Image from 'next/image';
//  components
import OrdersContainer from './OrdersContainer';
//  hooks
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../hooks';
// styles 
import styles from '../styles/css/order_complete.module.css';
//  features
import { removeAllProducts, submitOrder } from '../features/cart/cartSlice';
import { setOverlayVisibility } from '../features/overlay/overlaySlice';



const OrderComplete:FC = () => {
  const router = useRouter();
  const {isOrderComplete} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const proceed = () =>{
    dispatch(removeAllProducts());
    dispatch(setOverlayVisibility(false));
    dispatch(submitOrder(false));
    router.replace('/');
  }
  return (
    <>
      {isOrderComplete && 
        <div className={styles.modal_container}>
          <div className={styles.modal}>
            <div className={styles.image_container}>
              <Image src='/assets/shared/desktop/check-icon.svg' width={70} height={70} alt='check icon'/>
            </div>
            <p className={styles.heading}>thank you for your order</p>
            <p className={styles.info}>You will receive an email confirmation shortly.</p>
            <OrdersContainer />
            <button onClick={proceed} className={styles.back_to_home_btn}>back to home</button>
          </div>
        </div>
      }
    </>
  );
};

export default OrderComplete;
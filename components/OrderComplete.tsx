import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';
import { Context } from '../context';

// styles 
import styles from '../styles/css/order_complete.module.css';
import OrdersContainer from './OrdersContainer';


const OrderComplete:FC = () => {
  const {state: {orderComplete}, dispatch} = useContext(Context);
  const router = useRouter();
  const proceed = () =>{
    dispatch({type:'REMOVE_ALL_PRODUCTS', payload: []});
    dispatch({type: 'OVERLAY', payload: false});
    dispatch({type: 'SUBMIT_ORDER', payload: false});
    router.replace('/');
  }
  return (
    <>
      {orderComplete && 
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
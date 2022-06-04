import React, { FC } from 'react';
//  functions
import { dot } from '../lib/MyFunctions';
//  const
import { shippingPrice, vat } from '../lib/constants';
// styles
import styles from '../styles/css/summary.module.css';
//  features
import { setOverlayVisibility } from '../features/overlay/overlaySlice';
import { submitOrder } from '../features/cart/cartSlice';
//  hooks
import { useAppDispatch, useAppSelector } from '../hooks';



const Summary:FC= () => {
 const {total: {totalPrice, amount}} = useAppSelector(state => state.cart);
 const dispatch = useAppDispatch();
 const pay = () =>{
  dispatch(setOverlayVisibility(true));
  dispatch(submitOrder(true));
 };
  return (
    <div className={styles.summary_container}>
      <table className={styles.table_container}>
        <thead>
          <tr>
            <th align='left' className={styles.heading}>summary</th>
          </tr>
        </thead>
        <tbody>
         <tr>
          <td className={styles.price_name}>total</td>
          <td align='right'>${dot(totalPrice)}</td>
         </tr>
         <tr>
          <td className={styles.price_name}>shipping</td>
          <td align='right'>${dot(shippingPrice)}</td>
         </tr>
         <tr>
          <td className={styles.price_name}>vat (included)</td>
          <td align='right'>${(vat * totalPrice).toFixed(2)}</td>
         </tr>
         <tr>
          <td className={styles.price_name} style={{paddingTop: '3rem'}}>grand total</td>
          <td align='right' style={{paddingTop: '3rem'}}>${dot(totalPrice + shippingPrice)}</td>
         </tr>
        </tbody>
      </table>
      <button onClick={pay} className={styles.summary_btn} disabled={0 === amount}>continue & pay</button>
    </div>
  );
};

export default Summary;
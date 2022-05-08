import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { Context } from '../context';

//  functions
import { dot } from '../lib/MyFunctions';

//  const
import { shippingPrice, vat } from '../lib/Const';

// styles
import styles from '../styles/css/summary.module.css';



const Summary:FC= () => {
 const {state: {total: {totalPrice, amount}}, dispatch} = useContext(Context);
 const submitOrder = () =>{
  dispatch({type: 'OVERLAY', payload: true});
  dispatch({type:'SUBMIT_ORDER', payload: true})
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

    <button onClick={submitOrder} className={styles.summary_btn} disabled={0 === amount}>continue & pay</button>

    </div>
  );
};

export default Summary;
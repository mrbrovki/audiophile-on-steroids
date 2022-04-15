import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { shippingPrice, vat } from '../lib/Const';
import { dot } from '../lib/MyFunctions';
import { Context } from '../pages/_app';

// styles
import styles from '../styles/css/summary.module.css';



const Summary:FC= () => {

 const {state: {total: {totalPrice}}, dispatch} = useContext(Context);
 const pay = () =>{
  dispatch({type: 'REMOVE_ALL_PRODUCTS', payload: []});
 };

  return (
    <div className={styles.summary_container}>
     <table className={styles.table_container}>
      <thead>
       <th align='left' className={styles.heading}>summary</th>
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

     <Link href={'/'}>
      <a onClick={pay} className={styles.summary_btn}>continue & pay</a>
     </Link>
    </div>
  );
};

export default Summary;
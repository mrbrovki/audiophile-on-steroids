import React, {useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// components
import GoBackButton from '../components/GoBackButton';
import Main from '../components/Layout/Main';
import Summary from '../components/Summary';

// styles
import styles from '../styles/css/checkout.module.css';

// types
import { NextPage } from 'next';
import { PaymentInputRef } from '../lib/Types';
import OrderComplete from '../components/OrderComplete';



const Checkout:NextPage = () => {
 const router = useRouter();
 const [paymentMethod, setPaymentMethod] = useState('e-money');
 const paymentRef = useRef<PaymentInputRef>({e_money: null, cash: null});
 useEffect(()=>{
  paymentRef.current.cash?.addEventListener('click', () =>{
    setPaymentMethod('cash');
  });
  paymentRef.current.e_money?.addEventListener('click', () =>{
    setPaymentMethod('e-money')
  });
 }, [paymentRef]);

  return (
    <>
      <Head>
        <title>CHECKOUT</title>
      </Head>
      <Main marginTop='0rem' backgroundColor='#F1F1F1' >
        <GoBackButton router={router} marginTop='5rem'/>
        <div className={styles.checkout_container}>
           <form>
            <fieldset>
               <h1>checkout</h1>

               <p className={styles.subform}>billing details</p>
                <section className={styles.billing_details}>
                  <label htmlFor='name'>
                    <p className={styles.bold}>Name</p>
                    <input type='text' id='name' placeholder='Alexi Ward' />
                  </label>
                  <label htmlFor='email'>
                    <p className={styles.bold}>Email Address</p>
                    <input type='email' id='email' placeholder='alexei@mail.com' />
                  </label>
                  <label htmlFor='phone'>
                    <p className={styles.bold}>Phone Number</p>
                    <input type='text' id='phone' placeholder='+1 202-555-0136' />
                  </label>
                </section>
               
               <p className={styles.subform}>shipping info</p>
                <section className={styles.shipping_info}>
                 <label htmlFor='address' className={styles.adress}>
                   <p className={styles.bold}>Address</p>
                  <input type='text' id='address' placeholder='1137 Williams Avenue' />
                 </label>
                 <label htmlFor='zip'>
                   <p className={styles.bold}>ZIP Code</p>
                   <input type='text' id='zip' placeholder='1137 Williams Avenue' />      
                 </label>
                 <label htmlFor='city'>
                   <p className={styles.bold}>City</p>
                   <input type='text' id='city' placeholder='New York' />            
                 </label>
                 <label htmlFor='country'>
                   <p className={styles.bold}>Country</p>
                   <input type='text' id='country' placeholder='United States' />   
                 </label>
                </section>

               <p className={styles.subform}>payment details</p>
                <section className={styles.payment_details}>
                  <span className={styles.bold}>Payment Method</span>
                  <label htmlFor='e-money' className={styles.e_money}>
                    <input type='radio' id='e-money' name='method' value='e-money' defaultChecked className={styles.radio} 
                    ref={el => paymentRef.current.e_money = el}/>   
                    <span>e-Money</span>     
                   </label>
                  <label htmlFor='cash' className={styles.cash}>
                    <input type='radio' id='cash' name='method' value='cash' className={styles.radio} 
                    ref={el => paymentRef.current.cash = el}/>
                    <span>Cash on Delivery</span>
                  </label>
                </section>

                {
                  paymentMethod === 'e-money'?
                  (<section className={styles.e_money_info}>
                    <label htmlFor='e-money-number'>
                      <p className={styles.bold}>e-Money Number</p>
                      <input type='text' id='e-money-number' placeholder='238521993'/>
                    </label>
                    <label htmlFor='e-money-number'>
                      <p className={styles.bold}>e-Money PIN</p>
                      <input type='text' id='e-money-pin' placeholder='6891'/>
                    </label>
                  </section>) : (<></>)
                }
            </fieldset>
          </form>
          <Summary />
        </div>
        {<OrderComplete />}
      </Main>
    </>
  );
};

export default Checkout;
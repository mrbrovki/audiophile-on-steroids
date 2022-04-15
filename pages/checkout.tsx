import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// components
import GoBackButton from '../components/GoBackButton';

// styles
import styles from '../styles/css/checkout.module.css';

// types
import { NextPage } from 'next';



const Checkout:NextPage = () => {
 const router = useRouter();
  return (
    <>
      <Head>
        <title>CHECKOUT</title>
      </Head>
      <div className={styles.checkout_container}>
       <GoBackButton router={router} marginTop='8rem'/>
      </div>
    </>
  );
};

export default Checkout;
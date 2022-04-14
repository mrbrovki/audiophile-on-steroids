import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../pages/_app';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from "swr";

//  types
import { ProductProps } from '../lib/Types';

//  styles
import styles from '../styles/css/cart_items.module.css';

const CartItems = () => {
  const {state:{products}, dispatch} = useContext(Context);

  const removeAllItems = () =>{
    dispatch({type: 'REMOVE_ALL_PRODUCTS', payload: []});
  };

  // const fetcher = (url: string) => fetch(url).then(res => res.json());
  // const baseurl = "https://my-json-server.typicode.com/mrbrovki/demo/all?";

  // const getProductsData = async () =>{ 
  //   const url = baseurl + (products.map(product =>{
  //     return(
  //       `id=${product.id}`
  //     );
  //   })).join('&');
  //   const {data} = useSWR<ProductProps[]>(url, fetcher);
  //   return data;
  // };

  // useEffect(()=>{
  //   const total = products.reduce((total, product) => {
  //     const {amount} = product;
  //     total.amount += amount;
  //     total.totalPrice += product.price * amount;
  //     return total;
  //   }, {amount: 0, totalPrice:0});
  //   dispatch({type: 'TOTAL', payload: total});
  // }, [products]);
  // const items = getProductsData().then(data =>{
  //   data?.map((el=>{
  //     return(
  //        <section key={el.id} className={styles.item}>
  //         <section>
  //         <h4 className={styles.item_name}>qwert</h4>
  //         <p className={styles.item_price}>000</p>
  //         </section>
  //        </section>
  //       );
  //   }))
  // });

  return (
    <div className={styles.cart_items_container}>
      <div>
        <div>CART({0})</div>
        <button onClick={removeAllItems}>Remove all</button>
      </div>
      <div className={styles.products}>
      </div>
      <div>
        <p>Total</p>
        <p>${0}</p>
      </div>
      <Link href='/checkout'>
        <a className={styles.checkout_btn}>checkout</a>
      </Link>
    </div>
  );
};

export default CartItems;
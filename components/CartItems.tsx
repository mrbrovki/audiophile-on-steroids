import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../pages/_app';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from "swr";

//  components
import Counter from './Counter';

//  functions
import { dot, getAmount } from '../lib/MyFunctions';

//  types
import { CartProductProps } from '../lib/Types';

//  const
import { baseURL } from '../lib/Const';

//  styles
import styles from '../styles/css/cart_items.module.css';



const CartItems = () => {
  const {state: {products, total}, dispatch} = useContext(Context);
  const [items, setItems] = useState([] as JSX.Element[]);
  const removeAllItems = () =>{
    dispatch({type: 'REMOVE_ALL_PRODUCTS', payload: []});
  };
  const filter = products.map(product => {
    return `id=${product.id}`;
  }).join('&');
  const filteredURL = baseURL + filter;
  const getData = async () =>{
    const response = await fetch(filteredURL);
    const data = await response.json();
    return data;
  };
  const {data} = useSWR<CartProductProps[]>(filteredURL, getData);
  useEffect(()=>{
    if(data){
      setItems(
        data.map(item =>{
          if(getAmount(products, item.id)){
            return(
              <div key={item.id} className={styles.item_container}>
                <div className={styles.image_container}>
                  <Image src={item.image.mobile} width={80} height={80} alt='item'/>
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{item.name.split(' ')[0]}</p>
                  <p className={styles.price}>${dot(item.price)}</p>
                </div>
                <Counter type='CartItems' id={item.id}/>
              </div>
            );
          }
          else{
            return <React.Fragment key={item.id}></React.Fragment>
          }
        })
      );
    }
  }, [data]);
  useEffect(() =>{
      const total = products.reduce((total, product) => {
        const {amount} = product;
        total.amount += amount;
        total.totalPrice += product.price * amount;
        return total;
      }, {amount: 0, totalPrice:0});
    dispatch({type: 'TOTAL', payload: total});
  }, [products]);

  return (
    <div className={styles.cart_items_container}>
      <div className={styles.cart_top}>
        <div className={styles.total_amount}>CART({total.amount})</div>
        <button onClick={removeAllItems} className={styles.remove_btn}>Remove all</button>
      </div>
      <div className={styles.products}>
        {items}
      </div>
      <div className={styles.cart_bottom}>
      <div className={styles.total}>
        <p style={{color: '#a6a6a6'}}>Total</p>
        <p>${dot(total.totalPrice)}</p>
      </div>
      <Link href='/checkout'>
        <a className={styles.checkout_btn}>checkout</a>
      </Link>
      </div>
    </div>
  );
};

export default CartItems;
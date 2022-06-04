import React, { FC, useEffect, useState } from 'react';
//  types
import { CounterProps } from '../lib/Types';
// functions
import { getAmount } from '../lib/MyFunctions';
//  styles
import styles from '../styles/css/counter.module.css';
//  features
import { setProductAmount } from '../features/cart/cartSlice';
//  hooks
import { useAppDispatch, useAppSelector } from '../hooks';



const Counter:FC<CounterProps> = ({addToCart, id, type}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.cart.products);
  const [amount, setAmount] = useState(getAmount(products, id));
  const increase = () => setAmount(prev => prev + 1);
  const decrease = () => setAmount(prev => prev > 0? prev - 1: prev);
  useEffect(()=>{
    if(type === 'CartItems' && id){
      dispatch(setProductAmount({id, amount}));
    }
  }, [amount]);
  
  switch(type){
    case 'ProductPage':
      return (
       <div className={styles.flex_container}>
        <div className={styles.counter_container}  >
         <p className={styles.sign} onClick={decrease}>-</p>
         <p className={styles.amount}>{amount}</p>
         <p className={styles.sign} onClick={increase}>+</p> 
        </div>
        {addToCart && <button className={styles.add_to_cart_btn} onClick={() => addToCart(amount)} disabled={amount === 0}>
         add to cart
        </button>}
       </div>
      );
    case 'CartItems':
      return(
        <div className={styles.cart_flex_container}>
          <div className={styles.counter_container}  >
           <p className={styles.sign} onClick={decrease}>-</p>
           <p className={styles.amount}>{amount}</p>
           <p className={styles.sign} onClick={increase}>+</p> 
          </div>
        </div>
      );
    default:
      return(<></>);
  }
};

export default Counter;
import React, { FC, useState } from 'react';

//  styles
import styles from '../styles/css/counter.module.css';



const Counter :FC<{addToCart: (amount: number) => void}> = ({addToCart}) => {
  const [amount, setAmount] = useState(0);
  const increase = () => setAmount(prev => prev + 1);
  const decrease = () => setAmount(prev => prev > 0? prev - 1: prev);
  
  return (
   <div className={styles.flex_container}>
    <div className={styles.counter_container}  >
     <p className={styles.sign} onClick={decrease}>-</p>
     <p className={styles.amount}>{amount}</p>
     <p className={styles.sign} onClick={increase}>+</p> 
    </div>
    <button className={styles.add_to_cart_btn} onClick={() => addToCart(amount)}>
     add to cart
    </button>
   </div>
  );
};

export default Counter;
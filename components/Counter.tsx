import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from '../pages/_app';

//  types
import { CounterProps } from '../lib/Types';

// functions
import { getAmount } from '../lib/MyFunctions';

//  styles
import styles from '../styles/css/counter.module.css';



const Counter:FC<CounterProps> = ({addToCart, id, type}) => {
  const {state: {products}, dispatch} = useContext(Context);
  const [amount, setAmount] = useState(getAmount(products, id));
  const increase = () => setAmount(prev => prev + 1);
  const decrease = () => setAmount(prev => prev > 0? prev - 1: prev);

  useEffect(()=>{
    if(type === 'CartItems' && id){
      dispatch({type:'SET_PRODUCT_AMOUNT', payload:{amount, id}});
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
        {addToCart && <button className={styles.add_to_cart_btn} onClick={() => addToCart(amount)}>
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
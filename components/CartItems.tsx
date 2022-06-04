import React, { useEffect, useState } from 'react';
import Image from 'next/image';
//  hooks
import useSWR from "swr";
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../hooks';
//  components
import Counter from './Counter';
//  functions
import { dot, getAmount } from '../lib/MyFunctions';
import { fetcher } from '../lib/fetcher';
//  types
import { CartProductProps } from '../lib/Types';
//  constants
import { baseURL } from '../lib/constants';
//  features
import { calculateTotal, removeAllProducts, setCartVisibility } from '../features/cart/cartSlice';
import { setOverlayVisibility } from '../features/overlay/overlaySlice';
import { setNavBarVisibility } from '../features/navigation/navSlice';
//  styles
import styles from '../styles/css/cart_items.module.css';



const CartItems = () => {
  const router = useRouter();
  const {products, total: {totalPrice, amount}} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState([] as JSX.Element[]);
  const filter = products.map(product => {
    return `id=${product.id}`;
  }).join('&');
  const {data} = useSWR<CartProductProps[]>(baseURL + filter, fetcher);
  const closeAll = () =>{
    dispatch(setOverlayVisibility(false));
    dispatch(setCartVisibility(false));
    dispatch(setNavBarVisibility(false));
    router.push('/checkout');
  };

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
            return(<></>)
          }
        })
      );
    }
  }, [data]);
  
  useEffect(() =>{
    dispatch(calculateTotal());
  }, [products]);

  return (
    <div className={styles.cart_items_container}>
      <div className={styles.cart_top}>
        <div className={styles.total_amount}>CART({amount})</div>
        <button onClick={() => dispatch(removeAllProducts())} className={styles.remove_btn}>Remove all</button>
      </div>
      <div className={styles.products}>
        {items}
      </div>
      <div className={styles.cart_bottom}>
      <div className={styles.total}>
        <p style={{color: '#a6a6a6'}}>Total</p>
        <p>${dot(totalPrice)}</p>
      </div>
        <button className={styles.checkout_btn} onClick={closeAll} disabled={products==[]}>checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
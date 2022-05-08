import React, { FC, useContext } from 'react';
import Image from 'next/image';
import { dot } from '../lib/MyFunctions';
import { Context } from '../context';
// styles
import styles from '../styles/css/orders_container.module.css';



const OrdersContainer:FC = () => {
  const {state: {products, total}} = useContext(Context);
  const firstProduct = products[0];

  return (
    <div className={styles.orders_container}>
      <div className={styles.orders}>
        <div className={styles.first_product}>
          <div className={styles.image_container}>
            <Image src={firstProduct.image} width={80} height={80} alt='item'/>
          </div>
          <p className={styles.name}>{firstProduct.name.split(' ')[0]}</p>
          <p className={styles.price}>${dot(firstProduct.price)}</p>
          <p className={styles.amount}>x{firstProduct.amount}</p>
        </div>
        <div className={styles.other_orders}>
          <p>and {total.amount - firstProduct.amount} other item(s)</p>
        </div>
      </div>
      <div className={styles.total_container}>
        <p className={styles.grand_total}>grand total</p>
        <p className={styles.total_price}>${dot(total.totalPrice)}</p>
      </div>
    </div>
  );
};

export default OrdersContainer;
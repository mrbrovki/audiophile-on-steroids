import React, { FC } from 'react';
import { InTheBox } from '../../lib/Types';

// styles 
import styles from '../../styles/css/product_details.module.css';



const ProductDetails:FC<{features: string; includes: InTheBox}> = ({features, includes}) => {
  return (
    <section className={styles.details_container}>
     <div className={styles.features}>
      <h2 className={styles.section_heading}>features</h2>
      <p className={styles.features_text}>{features}</p>
     </div>
     <div className={styles.in_the_box}>
      <h2 className={styles.section_heading}>in the box</h2>
      {
       includes.map(item =>{
        return(
         <div key={item.item}>
          <span className={styles.quantity}>{item.quantity}x</span>
          <span className={styles.item}>{item.item}</span>
         </div>
        )
       })
      }
     </div>
    </section>
  );
};

export default ProductDetails;
import React, { FC } from 'react';
import Image from 'next/image';
//styles
import styles from '../styles/css/gear.module.css';



const Gear:FC = () => {
  return (
    <div className={styles.gear}>
     <div className={styles.gear_info}>
      <h3>bringing you the <span>best</span> audio gear</h3>
      <p>Located at the heart of New York City. Audiophile is the premiere store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who Audiophile the best place to buy your portable audio equipment.</p>     
     </div>
     <div className={styles.gear_image}>
      <Image src={'/assets/shared/tablet/image-best-gear.jpg'} layout={'fill'} objectFit={'cover'} alt='gear'/>
     </div>
    </div>
  );
};

export default Gear;

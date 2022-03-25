import React, { FC } from 'react';
import styles from '../styles/css/gear.module.css';
import Image from 'next/image';
const Gear:FC = () => {
  return (
    <div className={styles.gear}>
     <div className={styles.gear_info}>
      <h3>bringing you the <span>best</span> audio gear</h3>
      <p>Located at the heart of New York City. Audiophile is the premiere store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who Audiophile the best place to buy your portable audio equipment.</p>     
     </div>
     <div className={styles.gear_image}>
      <Image src={'/assets/shared/tablet/image-best-gear.jpg'} layout={'fill'} objectFit={'cover'}/>
     </div>
    </div>
  )
}

export default Gear;


    //   <article className={'gear gear-' + props.responsive} style={{marginTop: '8rem'}}>
    //   <section>
    //   </section>
    //   <img src={`/assets/shared/${props.responsive}/image-best-gear.jpg`}/>
    // </article>
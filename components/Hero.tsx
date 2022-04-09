import React from 'react';
import Image from 'next/image';

//  components
import SeeProduct from './SeeProduct';

//  styles
import styles from '../styles/css/hero.module.css';



const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_bg}></div>
      <h1 className={styles.hero_h1}>xx9 mark ii headphones</h1>
      <p className={styles.hero_p}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <div className={styles.bg_pic}>
        <Image src={'/assets/home/tablet/image-header.jpg'} layout='fill' 
        quality={90}
        objectFit={'contain'}
        objectPosition={'center right'}
        priority={true}
        alt='hero image'
      />
      </div>
      <SeeProduct href={'/headphones/xx99-mark-two-headphones'} bg={'orange'}/>
    </div>
  );
};

export default Hero;
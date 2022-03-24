import React from 'react';
import Image from 'next/image';
import styles from '../styles/css/hero.module.css';
import SeeProduct from './SeeProduct';

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
      />
      </div>
      <SeeProduct href={'/categories/headphones/4'} bg={'orange'}/>
    </div>
  );
};

export default Hero;
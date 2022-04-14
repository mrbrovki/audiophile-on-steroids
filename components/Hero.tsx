import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

//  components
import SeeProduct from './SeeProduct';

//  types
import { HeroType } from '../lib/Types';

//  styles
import styles from '../styles/css/hero.module.css';



const Hero:FC<{type: HeroType, children?: ReactNode}> = ({type, children}) => {
  
  switch(type){
    case 'home':
      return (
        <div className={styles.hero}>
          <div className={styles.hero_bg}></div>
          <h1 className={styles.hero_h1}>xx9 mark ii headphones</h1>
          <p className={styles.hero_p}>Experience natural, lifelike audio and exceptional build     quality made for the passionate music enthusiast.</p>
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
    case 'category':
      return(
        <h1 className={styles.category_hero}>
          {children}
        </h1>
      );
    default:
      return(<></>);
  }
};

export default Hero;
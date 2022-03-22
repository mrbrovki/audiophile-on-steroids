import React from 'react';
import Image from 'next/image';
import styles from '../styles/css/hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_bg}></div>
      <h1 className={styles.hero_h1}>xx9 mark ii headphones</h1>
      <p className={styles.hero_p}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <div className={styles.top}>

      </div>
    </section>
  )
}

export default Hero
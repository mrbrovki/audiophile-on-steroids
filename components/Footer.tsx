import React from 'react';
import styles from '../styles/css/footer.module.css';
import Link from 'next/link';
import { categories } from '../public/categories';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
     <Link href={'/'}>
      <a className={styles.logo}>
       <img src='/assets/shared/desktop/logo.svg' alt='logo' />
      </a>
     </Link>
     <nav>
      <ul className={styles.links}>
       {categories.map(catName =>
        <li key={catName} className={styles.link}>
         <Link href={'/categories/' + catName}>
          <a>{catName}</a>
         </Link>
        </li>
       )}
       <li className={styles.link}>
        <Link href={'/'}>
         <a>HOME</a>
        </Link>
       </li>
      </ul>
     </nav>

     <p className={styles.description}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility-we're open 7 days a week.</p>

     <p className={styles.copyright}>Copyright 2022. All Rights Reserved</p>

     <ul className={styles.social_icons}>
      <li>
       <Link href={'/'}>
        <a>
         <Image src='/assets/shared/desktop/icon-facebook.svg'
          layout='fixed'
          width={32}
          height={32}
         />
        </a>
       </Link>
      </li>
      <li>
       <Link href={'/'}>
        <a>
         <Image src='/assets/shared/desktop/icon-twitter.svg'
          layout='fixed'
          width={32}
          height={32}
         />
        </a>
       </Link>
      </li>
      <li>
       <Link href={'/'}>
        <a>
         <Image src='/assets/shared/desktop/icon-instagram.svg'
          layout='fixed'
          width={32}
          height={32}
         />
        </a>
       </Link>
      </li>
     </ul>
    </footer>
  )
}

export default Footer
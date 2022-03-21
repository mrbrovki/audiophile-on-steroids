
import React, { FC } from 'react'
import Link from 'next/link';
// styles
import styles from '../styles/scss/header.module.scss';
import Cart from './Cart';
import Navigation from './Navigation';

const Header:FC = () => {
  console.log('wtf')
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <a className={styles.desktop_logo}>
          <img src='/assets/shared/desktop/logo.svg' alt='logo' />
        </a>
      </Link>
      <Navigation />
      <Link href={'/'}>
        <a className={styles.tb_mb_logo}>
          <img src='/assets/shared/desktop/logo.svg' alt='logo' />
        </a>
      </Link>
      <Cart />
    </header>
  )
}

export default Header
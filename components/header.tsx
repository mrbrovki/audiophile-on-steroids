
import React, { FC } from 'react'

// styles
import styles from '../styles/scss/header.module.scss';
import Cart from './Cart';
import Navigation from './Navigation';

const Header:FC = () => {
  console.log('wtf')
  return (
    <header className={styles.header}>
      <Navigation />
      <Cart />
    </header>
  )
}

export default Header
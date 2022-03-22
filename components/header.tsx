import React, { FC, useState } from 'react'
import Link from 'next/link';
// components
import Cart from './Cart';
import Navigation from './Navigation';
// styles
import styles from '../styles/scss/header.module.scss';

const Header:FC = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [showNav, setShowNav] = useState('hidden');
  const [showCart, setShowCart] = useState(true);

  //nav functions
  const toggleNav = () =>{
    closeCart();
    showNav === 'shown'? closeNav(): openNav();
  };
  const openNav = () =>{
    setIsOverlay(true);
    setShowNav('shown');
  }
  const closeNav = () =>{
    setIsOverlay(false);
    setShowNav('hidden');
  }

  //cart functions
  const toggleCart = () =>{
    closeNav();
    showCart === true? closeCart(): openCart();
  };
  const openCart = () =>{
    setIsOverlay(true);
    setShowCart(true);
  }
  const closeCart = () =>{
    setIsOverlay(false);
    setShowCart(false);
  }

  const overlayClick = () =>{
    closeNav();
    closeCart();
  }

  return (
    <>
      <header className={styles.header}>
        <Link href={'/'}>
        <a className={styles.desktop_logo}>
          <img src='/assets/shared/desktop/logo.svg' alt='logo' />
        </a>
        </Link>
        <Navigation toggleNav={toggleNav} showNav={showNav} closeNav={closeNav}/>
        <Link href={'/'}>
        <a className={styles.tb_mb_logo}>
          <img src='/assets/shared/desktop/logo.svg' alt='logo' />
        </a>
        </Link>
        <Cart toggleCart={toggleCart} showCart={showCart} closeCart={closeCart}/>
      </header>
      {
       isOverlay && <div className={styles.overlay} onClick={overlayClick}></div>
      }
    </>
  )
}

export default Header
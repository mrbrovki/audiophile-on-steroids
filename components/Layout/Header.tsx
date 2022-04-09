import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//components
import Cart from '../Cart';
import Navigation from '../Navigation';

// styles
import styles from '../../styles/css/header.module.css';



const Header:FC = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [showNav, setShowNav] = useState('hidden');
  const [showCart, setShowCart] = useState(false);

  //nav functions
  const toggleNav = () =>{
    closeCart();
    showNav === 'shown'? closeNav(): openNav();
  };
  const openNav = () =>{
    setIsOverlay(true);
    setShowNav('shown');
  };
  const closeNav = () =>{
    setIsOverlay(false);
    setShowNav('hidden');
  };

  //cart functions
  const toggleCart = () =>{
    closeNav();
    showCart === true? closeCart(): openCart();
  };
  const openCart = () =>{
    setIsOverlay(true);
    setShowCart(true);
  };
  const closeCart = () =>{
    setIsOverlay(false);
    setShowCart(false);
  };
  const overlayClick = () =>{
    closeNav();
    closeCart();
  };

  return (
    <>
      <header className={styles.header_container}>
        <Navigation navType='HEADER' />
        <Cart toggleCart={toggleCart} showCart={showCart} closeCart={closeCart}/>
      </header>
    </>
  );
}; 

export default Header;
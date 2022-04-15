import React, { FC } from 'react';

//components
import Cart from '../Cart';

//  components
import Navigation from '../Navigation';

// styles
import styles from '../../styles/css/header.module.css';



const Header:FC = () => {
  return (
    <>
      <header className={styles.header_container}>
        <Navigation navType='HEADER' />
        <Cart />
      </header>
    </>
  );
}; 

export default Header;
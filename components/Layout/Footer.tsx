import React, { FC } from 'react';
//  components
import Navigation from '../Navigation';
//  styles
import styles from '../../styles/css/footer.module.css';



const Footer:FC = () => {
  return (
    <footer className={styles.footer_container}>
      <Navigation navType='FOOTER'/>
    </footer>
  );
};

export default Footer;
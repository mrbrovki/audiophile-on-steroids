import React from 'react';

//  styles
import styles from '../../styles/css/footer.module.css';
import Navigation from '../Navigation';

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <Navigation navType='FOOTER'/>
    </footer>
  );
};

export default Footer;
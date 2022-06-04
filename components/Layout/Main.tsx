import React, { FC } from 'react';
// styles
import styles from '../../styles/css/main.module.css';
// types
import { MainProps } from '../../lib/Types';



const Main:FC<MainProps> = ({children, marginTop, backgroundColor}) =>{
 return(
  <main className={styles.main_container} style={{marginTop, backgroundColor}}>
   {children}
  </main>
 );
};

export default Main;
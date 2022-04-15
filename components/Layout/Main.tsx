import React, { FC, ReactNode } from 'react';

//  styles
import styles from '../../styles/css/main.module.css';



const Main:FC<{children: ReactNode, marginTop?: string}> = ({children, marginTop}) =>{
 return(
  <main className={styles.main_container} style={{marginTop}}>
   {children}
  </main>
 );
};

export default Main;
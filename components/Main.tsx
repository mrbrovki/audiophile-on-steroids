import React, { FC, ReactNode } from 'react';
import styles from '../styles/css/main.module.css';

const Main:FC<{children: ReactNode}> = ({children}) => {
  return (
    <main className={styles.main}>{children}</main>
  )
}

export default Main
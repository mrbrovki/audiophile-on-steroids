import React, { FC, ReactNode } from 'react';
import styles from '../styles/css/main.module.css';

const Main:FC<{children: ReactNode, marginTop: string}> = ({children, marginTop}) => {
  return (
    <main className={styles.main}style={{marginTop}}>{children}</main>
  )
}

export default Main
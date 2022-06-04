import React, { FC } from 'react';
// types
import { NextRouter } from 'next/router';
// styles
import styles from '../styles/css/go_back_button.module.css';



const GoBackButton:FC<{router: NextRouter, marginTop: string}> = ({router, marginTop}) => {
  return (
    <button onClick={router.back} style={{marginTop}} className={styles.go_back_btn}>Go Back</button>
  );
};

export default GoBackButton;
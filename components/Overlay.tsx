import React, {FC, useContext} from 'react';
import { Context } from '../pages/_app';

// styles
import styles from '../styles/css/overlay.module.css';



const Overlay:FC = () => {
 const isOverlay = useContext(Context)?.state.isOverlay;
 return(
  <>
   {isOverlay && <div className={styles.overlay}></div>}
  </>
 );
};

export default Overlay;
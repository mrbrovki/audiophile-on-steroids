import React, {FC, useContext} from 'react';
import { Context } from '../pages/_app';

// styles
import styles from '../styles/css/overlay.module.css';



const Overlay:FC = () => {
 const {state: {isOverlay}, dispatch} = useContext(Context);
 const overlayClick = () =>{
  dispatch({type: 'OVERLAY', payload: false});
  dispatch({type: 'NAVBAR', payload:'hidden'});
  dispatch({type: 'CART', payload: false});
 }
 return(
  <>
   {isOverlay && <div className={styles.overlay} onClick={overlayClick}></div>}
  </>
 );
};

export default Overlay;
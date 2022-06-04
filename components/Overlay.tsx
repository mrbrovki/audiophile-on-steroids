import React, { FC, useEffect } from 'react';
// styles
import styles from '../styles/css/overlay.module.css';
//  features
import { setOverlayVisibility } from '../features/overlay/overlaySlice';
import { setNavBarVisibility } from '../features/navigation/navSlice';
import { setCartVisibility } from '../features/cart/cartSlice';
//  hooks
import { useAppDispatch, useAppSelector } from '../hooks';

const Overlay:FC = () => {
  const dispatch = useAppDispatch();
  const isOverlay = useAppSelector(state => state.overlay.isOverlay);
  const overlayClick = () => {
    dispatch(setOverlayVisibility(false));
    dispatch(setNavBarVisibility(false));
    dispatch(setCartVisibility(false));
  };
  useEffect(()=>{
    if(isOverlay){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'visible'
    }
  },[isOverlay]);
 
 return(
  <>
   {isOverlay && <div className={styles.overlay} onClick={overlayClick}></div>}
  </>
 );
};

export default Overlay;
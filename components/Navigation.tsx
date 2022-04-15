import React, {FC, useContext, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../public/categories';

//  styles
import styles from '../styles/css/navigation.module.css';

//  types
import { NavProps } from '../lib/Types';
import { Context } from '../pages/_app';



const Navigation:FC<NavProps> = ({navType}) => {
  const {state:{navBarVisiblity}, dispatch} = useContext(Context);
  const toggleNav = () => {
    if(navBarVisiblity === 'hidden'){
      dispatch({type: 'CART', payload: false});
      dispatch({type:'NAVBAR', payload:'shown'});
      dispatch({type: 'OVERLAY', payload: true});
    }
    else{
      dispatch({type:'NAVBAR', payload:'hidden'});
      dispatch({type: 'OVERLAY', payload: false});
    }
  }
  const closeAll = () =>{
    dispatch({type: 'OVERLAY', payload: false});
    dispatch({type: 'CART', payload: false});
    dispatch({type:'NAVBAR', payload:'hidden'});
  }

  switch(navType){
    case 'HEADER':
      return(
        <>
          <Link href={'/'} passHref>
            <a className={styles.header_logo} onClick={closeAll}>
              <Image src='/assets/shared/desktop/logo.svg' alt='logo' width={143} height={25}/>
            </a>
          </Link>
          <nav className={styles.header_nav_container}>
            <div className={styles.hamburger} onClick={toggleNav}> 
              <Image src='/assets/shared/tablet/icon-hamburger.svg' alt='hamburger' width={25}  height={25}/>
            </div>
            <ul className={styles.nav_list + ' ' + styles[navBarVisiblity]}>
              <li className={styles.link} onClick={closeAll}>
                <Link href={'/'}>
                  <a>home</a>
                </Link>
               </li>
                {categories.map(category =>{
                  return(
                    <li key={category} className={styles.link} onClick={closeAll}>
                      <Link href={`/${category}`}>
                        <a>{category}</a>
                      </Link>
                    </li>
                  );
                })
              }
            </ul>      
          </nav>
        </>
      );
    case 'FOOTER':
      return(
        <>
          <Link href={'/'}>
            <a className={styles.footer_logo}>
              <Image src='/assets/shared/desktop/logo.svg' alt='logo' width={143} height={25}/>
            </a>
          </Link> 
          <nav className={styles.footer_nav_container}>
            <ul className={styles.nav_list}>
              <li className={styles.link}>
                <Link href={'/'}>
                  <a>home</a>
                </Link>
               </li>
              {categories.map(category =>{
                  return(
                    <li key={category} className={styles.link}>
                      <Link href={`/${category}`}>
                        <a>{category}</a>
                      </Link>
                    </li>
                  );
                })
              }
            </ul>      
          </nav>
          <p className={styles.company_info}>Audiophile is an all in one stop to fulfill your audio needs. We&#39;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility-we&#39;re open 7 days a week.</p>
          <p className={styles.copyright}>Copyright 2022. All Rights Reserved</p>
          <div className={styles.social}>
            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" className={styles.social_link}>
              <Image src='/assets/shared/desktop/icon-facebook.svg' height={32} width={32} alt='social'/>
            </a>
            <a href='https://www.twitter.com/' target='_blank' rel="noreferrer" className={styles.social_link}>
              <Image src='/assets/shared/desktop/icon-twitter.svg' height={32} width={32} alt='social'/>
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" className={styles.social_link}>
              <Image src='/assets/shared/desktop/icon-instagram.svg' height={32} width={32} alt='social'/>
            </a>

          </div>
        </>
      );
    default: 
      return(<></>);
  };
};

export default Navigation;
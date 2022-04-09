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
  const [navBarVis, setNavBarVis] = useState('hidden');

  const toggleNav = () => setNavBarVis(prev => prev === 'shown' ? 'hidden' : 'shown');

  switch(navType){
    case 'HEADER':
      return(
        <>
          <Link href={'/'} passHref>
            <a className={styles.logo}>
              <Image src='/assets/shared/desktop/logo.svg' alt='logo' width={160} height={32}/>
            </a>
          </Link>
          <nav className={styles.header_nav_container}>
            <div className={styles.hamburger} onClick={toggleNav}> 
              <Image src='/assets/shared/tablet/icon-hamburger.svg' alt='hamburger' width={25}  height={25}/>
            </div>
            <ul className={styles.nav_list + ' ' + styles[navBarVis]}>
              <li className={styles.link}>
                <Link href={'/'}>
                  <a>home</a>
                </Link>
               </li>
                {categories.map(category =>{
                  return(
                    <li key={category} className={styles.link}>
                      <Link href={{pathname: '/[category]', query: {category: category}}}>
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
            <a>
              <Image src='/assets/shared/desktop/logo.svg' alt='logo' width={160} height={32}/>
            </a>
          </Link> 
          <nav>
            <ul>
              <li>
                <Link href={'/'}>
                  <a>home</a>
                </Link>
               </li>
              {categories.map(category =>{
                  return(
                    <li key={category}>
                      <Link href={{pathname: '/[category]', query: {category: category}}}>
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
    default: 
      return(<></>);
  };
};

export default Navigation;
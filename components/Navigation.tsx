import React, {FC} from 'react'
import { categories } from '../public/categories';
import Link from 'next/link';
import styles from '../styles/css/navigation.module.css';

interface NavProps{
  toggleNav: () => void;
  closeNav: () => void;
  showNav: string;
}

const Navigation:FC<NavProps> = ({toggleNav, showNav, closeNav}) => {
  return (
    <>
      <img src='/assets/shared/tablet/icon-hamburger.svg' className={styles.hamburger} alt='ham' onClick={toggleNav}/>
      <nav className={styles.nav_list + ' ' + styles[showNav]}>
       <ul>
        <li className={styles.link}>
         <Link href={'/'}>
          <a onClick={closeNav}>home</a>
         </Link>
        </li>
         {
          categories.map(category =>{
           return(
            <li key={category} className={styles.nav_link}>
             <Link href={{
               pathname: '/categories/[category]',
               query: {category: category}
              }}>
              <a onClick={closeNav}>{category}</a>
             </Link>
            </li>
          )})
         }
       </ul>
      </nav>
     </>
  )
}

export default Navigation
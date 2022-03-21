import Link from 'next/link';
import React, { FC } from 'react'
import { categories } from '../public/categories';
// styles
import styles from '../styles/scss/header.module.scss';

const Header:FC = () => {
  return (
    <header className={styles.header}>
     <Link href={'/'}>
      <a>
       <img src='/assets/shared/desktop/logo.svg' alt='logo' />
      </a>
     </Link>
     <nav className={styles.header_nav_list}>
      <ul>
       <li className={styles.header_link}>
        <Link href={'/'}>
         <a>home</a>
        </Link>
       </li>
        {
         categories.map(category =>{
          return(
           <li key={category} className={styles.header_nav_link}>
            <Link href={{
              pathname: '/categories/[category]',
              query: {category: category}
             }}>
             <a>{category}</a>
            </Link>
           </li>
         )})
        }
      </ul>
     </nav>
    </header>
  )
}

export default Header
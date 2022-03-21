import React from 'react'
import { categories } from '../public/categories';
import Link from 'next/link';
import styles from '../styles/css/navigation.module.css';
const Navigation = () => {
  return (
    <>
     <Link href={'/'}>
       <a>
        <img src='/assets/shared/desktop/logo.svg' alt='logo' />
       </a>
      </Link>
      <nav className={styles.nav_list}>
       <ul>
        <li className={styles.link}>
         <Link href={'/'}>
          <a>home</a>
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
              <a>{category}</a>
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
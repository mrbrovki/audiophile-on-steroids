import React, {useState} from 'react'
import { categories } from '../public/categories';
import Link from 'next/link';
import styles from '../styles/css/navigation.module.css';
const Navigation = () => {
  const [showNav, setShowNav] = useState('hidden');
  const handleClick = () =>{
    setShowNav(prev => prev === 'hidden'? 'shown': 'hidden');
  };

  return (
    <>
      <img src='/assets/shared/tablet/icon-hamburger.svg' className={styles.hamburger} alt='ham' onClick={handleClick}/>
      <nav className={styles.nav_list + ' ' + styles[showNav]}>
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
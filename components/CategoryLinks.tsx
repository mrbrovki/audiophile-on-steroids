import React from 'react';
import { categories } from '../public/categories';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/css/category_links.module.css';

const CategoryLinks = () => {
 const catLinks = categories.map((category, index) => {
  return(
    <Link href={'/categories/'+ category} key={index}>
      <a className={styles.category}>
       <div className={styles.image}>
        <Image src={`/assets/shared/desktop/image-${category}.png`} 
         layout={'fixed'}
         height={200}
         width={220}
         />
       </div>
      <div className={styles.cat_name}>{category}</div>
      <div className={styles.shop}>
       <span>shop</span>
       <div className={styles.arrow}>
        <Image src='/assets/shared/desktop/icon-arrow-right.svg' height={16} width={12}/>
       </div>
      </div>
     </a>
    </Link>

  );
 })

  return (
    <section className={styles.categories}>
     {catLinks}
    </section>
  )
}

export default CategoryLinks;
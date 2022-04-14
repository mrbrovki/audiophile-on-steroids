import React, {FC} from 'react';
import Image from 'next/image';

// types
import { Others } from '../lib/Types';
// styles
import styles from '../styles/css/others.module.css';
import SeeProduct from './SeeProduct';



const Others:FC<{others: Others}> = ({others}) => {
  return (
   <>
   <h2 className={styles.section_heading}>you may also like</h2>
    <section className={styles.others_container}>
      {others.map(other =>{
       return(
        <div className={styles.other} key={other.slug}>
         <div className={styles.image_container}>
          <Image src={other.image.desktop} layout='fill' objectFit='cover' objectPosition='center' alt='other' />
         </div>
         <h3 className={styles.other_name}>{other.name}</h3>
         <SeeProduct href={`/${other.category}/${other.slug}`} bg='orange' />
        </div>
       );
      })}
    </section>
   </>
  );
};

export default Others;
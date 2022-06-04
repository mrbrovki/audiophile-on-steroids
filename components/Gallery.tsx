import React, {FC} from 'react';
import Image from 'next/image';
//  types
import { ProductGallery } from '../lib/Types';
// styles
import styles from '../styles/css/gallery.module.css';



const Gallery:FC<{gallery: ProductGallery}> = ({gallery}) => {
  return (
    <section className={styles.gallery}>
     <div className={styles.grid_item_1}>
      <Image src={gallery.first.desktop} layout='fill' objectFit='cover' objectPosition='center' alt='gallery image'/>
     </div>
     <div className={styles.grid_item_2}>
      <Image src={gallery.second.desktop} layout='fill' objectFit='cover' objectPosition='center' alt='gallery image' />
     </div>
     <div className={styles.grid_item_3}>
      <Image src={gallery.third.desktop} layout='fill' objectFit='cover' objectPosition='center' alt='gallery image' />
     </div>
    </section>
  );
};

export default Gallery;
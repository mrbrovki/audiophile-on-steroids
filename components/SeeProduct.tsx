import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';

//  styles
import styles from '../styles/css/see_product.module.css';



const SeeProduct:FC<LinkProps & {bg: string}>= ({href, bg}) => {
  return (
    <Link href={href}>
      <a className={styles[bg]}>SEE PRODUCT</a>
    </Link>
  );
};

export default SeeProduct;
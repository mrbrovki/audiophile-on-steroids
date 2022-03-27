import type { NextPage } from 'next';
import { ReactNode, FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout:FC<{children: ReactNode}> = ({children}) => {
  return( 
  <>
    <Header />
    {children}
    <Footer />
  </>)
}

export default Layout;
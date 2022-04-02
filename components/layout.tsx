import { ReactNode, FC } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout:FC<{children: ReactNode}> = ({children}) => {
  return( 
  <>
    <Header />
    {children}
    <Footer />
  </>)
}

export default Layout;
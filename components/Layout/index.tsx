import { ReactNode, FC } from 'react';
import Overlay from '../Overlay';
import Footer from './Footer';
import Header from './Header';



const Layout:FC<{children: ReactNode}> = ({children}) => {
  return( 
    <>
      <Header />
      <Overlay />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
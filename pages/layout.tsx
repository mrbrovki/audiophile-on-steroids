import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Layout:NextPage = ({children}) => {
  return( 
  <>
    <Header />
    {children}
    <Footer />
  </>)
}

export default Layout;
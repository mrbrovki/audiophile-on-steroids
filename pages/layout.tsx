import type { NextPage } from 'next';
import Header from '../components/Header';
const Layout:NextPage = ({children}) => {
  return( 
  <>
    <Header />
    <div>{children}</div>
  </>)
}

export default Layout;
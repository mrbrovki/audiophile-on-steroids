import type { NextPage } from 'next';

const Layout:NextPage = ({children}) => {
  return( 
  <>
    <div>{children}</div>
  </>)
}

export default Layout;
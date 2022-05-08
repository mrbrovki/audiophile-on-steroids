//  components
import Layout from '../components/Layout';
//  context
import AppContext from '../context';
//  types
import type { AppProps } from 'next/app';

//  styles
import '../styles/css/globals.css';



const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  );
};

export default MyApp;

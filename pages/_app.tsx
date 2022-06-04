import { store } from '../store';
import { Provider } from 'react-redux'
//  components
import Layout from '../components/Layout';
//  types
import type { AppProps } from 'next/app';
//  styles
import '../styles/css/globals.css';



const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;

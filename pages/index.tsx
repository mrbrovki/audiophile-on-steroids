import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

//  components
import CategoryLinks from '../components/CategoryLinks';
import SeeProduct from '../components/SeeProduct';
import Main from '../components/Layout/Main';
import Hero from '../components/Hero';
import Gear from '../components/Gear';

//  styles
import styles from '../styles/css/home.module.css';



const Home: NextPage = () => {
   return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero type='home'/>
      <Main marginTop='26.4rem' backgroundColor='#fff'>
        <CategoryLinks />
        <section className={styles.home_products}>
          <div className={styles.zx9}>
            <div className={styles.circles}>
              <Image src={'/assets/home/desktop/pattern-circles.svg'} layout={'responsive'} width={1} height={1} alt='circles'/>
            </div>
            <div className={styles.zx9_image}>
              <Image src={'/assets/home/desktop/image-speaker-zx9.png'} width={300} height={400} alt='item'/>
            </div>
            <div className={styles.zx9_info}>
              <h2>zx9 speaker</h2>
              <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <SeeProduct href={'/speakers/zx9-speaker'} bg={'black'}/>
            </div>
          </div>
          <div className={styles.zx7}>
            <h3>zx7 speaker</h3>
            <SeeProduct href={'/speakers/zx7-speaker'} bg={'transparent'}/>
            <Image src={'/assets/home/tablet/image-speaker-zx7.jpg'} layout={'fill'} objectFit={'cover'} objectPosition={'left'} quality={80} alt='item'/>
          </div>
          <div className={styles.yx1}>
            <div className={styles.yx1_image}>
              <Image src={'/assets/home/tablet/image-earphones-yx1.jpg'} layout={'fill'} objectFit={'cover'} alt='item'/>
            </div>
            <div className={styles.yx1_info}>
              <h3>yx1 earphones</h3>
              <SeeProduct href={'/earphones/yx1-earphones'} bg={'transparent'}/>
            </div>
          </div>
        </section>
        <Gear />
      </Main>
    </>
  );
};

export default Home;

// index.tsx
import { FC, useEffect , useState} from 'react';
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '@src/components/Header'
import Main from '@src/components/Main'
import Footer from '@src/components/Footer'

const Home: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    return () => {
      // cleanup timers and function calls here 
    }
  }, [])
    

  return (
    // <div className={styles.container}>
    <React.Fragment>
      <Head>
        <title>Pets Care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main count ={count} />

      <Footer />
    </React.Fragment>
  );
};

export default Home;

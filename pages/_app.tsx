import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Navbar } from '@/components/header/Navbar';
import './globals.css'
import { Provider } from 'react-redux';
import { Store } from '@/store/Store';

export default function App({ Component,  pageProps }: AppProps) {
  return (
    <Provider store={Store}>
    <MantineProvider theme={theme}>
      <Head>
        <title>CSEC ASTU</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
     
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      
      <Component {...pageProps} />
    </MantineProvider>
    </Provider>
  );
}

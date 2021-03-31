import Head from "next/head";
import { AppProps } from 'next/app'
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps ) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Gabriel Amador" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

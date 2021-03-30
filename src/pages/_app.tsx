import Head from "next/head";
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Gabriel Amador" />
        <meta name="description" content="Blog created with NextJs" />
        <meta name="keywords" content="Blog, FrontEnd" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};


export default App;

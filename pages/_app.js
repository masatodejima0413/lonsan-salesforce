import Head from "next/head";
import "../public/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

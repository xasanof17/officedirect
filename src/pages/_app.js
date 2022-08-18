import Head from "next/head";
import "../assets/scss/globals.scss";
import { Footer, Navbar } from "../layouts";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "components/landing/header/HeaderType1";
import Footer from "components/landing/footer/FooterType1";
import GoldenCanonGrid from "components/golden-canon-grid/GoldenCanonGrid"

function layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/icons/icon-favicon.png"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="apple-touch-icon" href="/images/icons/icon-apple.png" />
      </Head>
      <Header />
      {children}
      <Footer />
      <GoldenCanonGrid/>
    </>
  );
}

export default layout;

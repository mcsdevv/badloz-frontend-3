import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/soluciones/iluminacion/Landing";
import Industriales from "components/landing/sections/soluciones/iluminacion/Industriales";

export default function Iluminacion() {
  return (
    <Layout>
      <Head>
        <title>Iluminación | Badloz</title>
        <meta
          name="description"
          content="Expertos en baja y media tensión, iluminación, energías renovables y telecomunicaciones."
        />
        <meta
          name="keywords"
          content="Expertos, industria, soluciones, baja tensión, media tensión, iluminación, energías renovables, telecomunicaciones."
        />
      </Head>
      <div className="spacer height--lv11" />
      <Landing />
      <div className="spacer height--lv9" />
      <Industriales />
      <div className="spacer height--lv11" />
    </Layout>
  );
}

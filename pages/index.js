import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/index/Landing";
import WhyUs from "components/landing/sections/index/WhyUs";
import ShopNow from "components/landing/sections/index/ShopNow";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Badloz | Soluciones para todas las industrias</title>
        <meta
          name="description"
          content="Expertos en baja y media tensión, iluminación, energías renovables y telecomunicaciones."
        />
        <meta name="keywords" content="Expertos, industria, soluciones, baja tensión, media tensión, iluminación, energías renovables, telecomunicaciones." />
      </Head>
      <Landing />
      <div className="spacer height--lv11" />
      <WhyUs/>
      <div className="spacer height--lv12" />
      <ShopNow/>
      <div className="spacer height--lv11" />
    </Layout>
  );
}

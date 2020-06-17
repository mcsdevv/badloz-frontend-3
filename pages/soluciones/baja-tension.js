import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/soluciones/baja-tension/Landing";
import Conductores from "components/landing/sections/soluciones/baja-tension/Conductores";
import Canalizacion from "components/landing/sections/soluciones/baja-tension/Canalizacion";
import AccesoriosTuberia from "components/landing/sections/soluciones/baja-tension/AccesoriosTuberia";
import ArtefactosElectricos from "components/landing/sections/soluciones/baja-tension/ArtefactosElectricos";

export default function BajaTension() {
  return (
    <Layout>
      <Head>
        <title>Baja Tension | Badloz</title>
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
      <Conductores />
      <div className="spacer height--lv9" />
      <Canalizacion />
      <div className="spacer height--lv9" />
      <AccesoriosTuberia />
      <div className="spacer height--lv9" />
      <ArtefactosElectricos />
      <div className="spacer height--lv11" />
    </Layout>
  );
}

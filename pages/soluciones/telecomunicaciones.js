import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/soluciones/telecomunicaciones/Landing";
import Canalizacion from "components/landing/sections/soluciones/telecomunicaciones/Canalizacion";

export default function Telecomunicaciones() {
    return (
        <Layout>
            <Head>
                <title>Telecomunicaciones | Badloz</title>
                <meta
                    name="description"
                    content="Expertos en baja y media tensión, iluminación, energías renovables y telecomunicaciones."
                />
                <meta name="keywords" content="Expertos, industria, soluciones, baja tensión, media tensión, iluminación, energías renovables, telecomunicaciones." />
            </Head>
            <div className="spacer height--lv11" />
            <Landing />
            <div className="spacer height--lv9" />
            <Canalizacion/>
            <div className="spacer height--lv11" />
        </Layout>
    );
}

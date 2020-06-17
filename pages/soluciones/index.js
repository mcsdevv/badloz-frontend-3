import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/soluciones/index/Landing";

export default function Soluciones() {
    return (
        <Layout>
            <Head>
                <title>Soluciones | Badloz</title>
                <meta
                    name="description"
                    content="Expertos en baja y media tensión, iluminación, energías renovables y telecomunicaciones."
                />
                <meta name="keywords" content="Expertos, industria, soluciones, baja tensión, media tensión, iluminación, energías renovables, telecomunicaciones." />
            </Head>
            <div className="spacer height--lv11" />
            <Landing />
            <div className="spacer height--lv9" />
            <div className="spacer height--lv11" />
        </Layout>
    );
}

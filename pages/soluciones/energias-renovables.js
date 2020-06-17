import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/soluciones/energias-renovables/Landing";
import AccesoriosCable from "../../components/landing/sections/soluciones/energias-renovables/AccesoriosCable";
import Conectores from "../../components/landing/sections/soluciones/energias-renovables/Conectores";
import Conductores from "../../components/landing/sections/soluciones/energias-renovables/Conductores";

export default function EnergiasRenovables() {
    return (
        <Layout>
            <Head>
                <title>Energías Renovables | Badloz</title>
                <meta
                    name="description"
                    content="Expertos en baja y media tensión, iluminación, energías renovables y telecomunicaciones."
                />
                <meta name="keywords" content="Expertos, industria, soluciones, baja tensión, media tensión, iluminación, energías renovables, telecomunicaciones." />
            </Head>
            <div className="spacer height--lv11" />
            <Landing />
            <div className="spacer height--lv9" />
            <AccesoriosCable />
            <div className="spacer height--lv9" />
            <Conectores/>
            <div className="spacer height--lv9" />
            <Conductores/>
            <div className="spacer height--lv11" />
        </Layout>
    );
}

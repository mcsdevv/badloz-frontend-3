import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/soluciones/media-tension/Landing";
import AccesoriosCable from "../../components/landing/sections/soluciones/media-tension/AccesoriosCable";
import SistemasTierra from "../../components/landing/sections/soluciones/media-tension/SistemasTierra";
import Conectores from "../../components/landing/sections/soluciones/media-tension/Conectores";
import Proteccion from "../../components/landing/sections/soluciones/media-tension/Proteccion";
import Preformados from "../../components/landing/sections/soluciones/media-tension/Preformados";
import FlejesHebillas from "../../components/landing/sections/soluciones/media-tension/FlejesHebillas";
import Herrajes from "../../components/landing/sections/soluciones/media-tension/Herrajes";

export default function BajaTension() {
    return (
        <Layout>
            <Head>
                <title>Media Tension | Badloz</title>
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
            <SistemasTierra />
            <div className="spacer height--lv9" />
            <Conectores />
            <div className="spacer height--lv9" />
            <Proteccion />
            <div className="spacer height--lv9" />
            <Preformados />
            <div className="spacer height--lv9" />
            <FlejesHebillas />
            <div className="spacer height--lv9" />
            <Herrajes />
            <div className="spacer height--lv11" />
        </Layout>
    );
}

import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/about/Landing";
import Mission from "components/landing/sections/about/Mission";
import Vision from "components/landing/sections/about/Vision";
import Values from "components/landing/sections/about/Values";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Badloz | Nosotros</title>
        <meta
          name="description"
          content="Improve your intimate life. Your toolkit for a vibrant and healthy sex life."
        />
        <meta name="keywords" content="wellness, sex, sextech" />
      </Head>
      <div className="spacer height--lv11" />
      <Landing />
      <div className="spacer height--lv9" />
      <Mission />
      <div className="spacer height--lv9" />
      <Vision />
      <div className="spacer height--lv9" />
      <Values />
      <div className="spacer height--lv11" />
    </Layout>
  );
}

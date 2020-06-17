import Head from "next/head";
import Layout from "components/layout.landing";
import Landing from "components/landing/sections/contact/Landing";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Neudify | Contact</title>
        <meta
          name="description"
          content="Improve your intimate life. Your toolkit for a vibrant and healthy sex life."
        />
        <meta name="keywords" content="wellness, sex, sextech" />
      </Head>
      <div className="spacer height--lv11" />
      <Landing />
      <div className="spacer height--lv11" />
    </Layout>
  );
}

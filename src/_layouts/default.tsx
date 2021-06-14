import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";

export default function DefaultLayout(props) {
  return (
    <main className="contaienr mx-auto max-w-screen-lg">
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header isHome={props.isHome} />
      <div>{props.children}</div>
      <Footer />
    </main>
  );
}

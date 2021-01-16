import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";
import styles from "./default.module.css";

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header isHome={props.isHome} />
      <div className={styles.container}>{props.children}</div>
      <Footer />
    </main>
  );
}

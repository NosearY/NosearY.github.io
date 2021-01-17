import DefaultLayout from "@layouts/default";
import Head from "next/head";
import Link from "next/link";

export default function PostLayout(props) {
  return (
    <DefaultLayout isHome={props.isHome}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <div>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>
        <h1>{props.title}</h1>
        <pre>{props.date}</pre>
        <hr></hr>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <div>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>
      </article>
    </DefaultLayout>
  );
}

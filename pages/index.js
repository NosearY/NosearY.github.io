import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";
import styles from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Blog(props) {
  return (
    <DefaultLayout
      title={props.title}
      description={props.description}
      date={props.date}
      isHome={true}
    >
      <p>文章:</p>
      <hr></hr>
      <ul>
        {props.posts.map(function (post, idx) {
          return (
            <li key={idx} className={styles.li_container}>
              <div className={[styles.date_label, utilStyles.flex1].join(" ")}>
                {post.date}
              </div>
              <div className={[styles.post_title, utilStyles.flex12].join(" ")}>
                <Link href={"/posts/" + post.slug}>
                  <a>{post.title}</a>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
        }
      `}</style>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}

import { AllPost, getAllPosts, getConfig } from "@api";
import DefaultLayout from "@layouts/default";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import styles from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";

export type BlogMeta = {
  posts: AllPost[];
  title: string;
  description: string;
  date: string;
};

export default function Blog(props: BlogMeta): any {
  return (
    <DefaultLayout
      title={props.title}
      description={props.description}
      date={props.date}
      isHome={true}
    >
      <p>文章: </p>
      <hr></hr>
      <ul>
        {props.posts.map((post, idx) => {
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
      <style jsx>
        {`
          ul {
            list-style-type: none;
          }
        `}
      </style>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<BlogMeta> = async () => {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
      date: new Date().toISOString(),
    },
  };
};

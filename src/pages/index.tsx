import { AllPost, getAllPosts, getConfig } from "@api";
import DefaultLayout from "@layouts/default";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import styles from "src/styles/index.module.css";
import utilStyles from "src/styles/utils.module.css";

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
      <div className="container">
        <p className="antialiased py-4 pl-4 font-bold">文章列表: </p>
        <hr></hr>
        <ul>
          {props.posts.map((post, idx) => {
            return (
              <li
                key={idx}
                className="flex flex-row justify-left items-center my-4 space-x-6 text-gray-600"
              >
                <div className="text-white bg-blue-500 text-xs rounded-full py-2 px-4">
                  {post.date}
                </div>
                <div>
                  <Link href={"/posts/" + post.slug}>
                    <span className="hover:no-underline hover:text-black cursor-pointer">
                      {post.title}
                    </span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

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

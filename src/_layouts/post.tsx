import Head from "next/head";
import Link from "next/link";
import React from "react";
import DefaultLayout from "./default";

export default function PostLayout(props) {
  return (
    <DefaultLayout isHome={props.isHome}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div>
        <div className="text-blue-500 my-2 hover:text-blue-900 underline">
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>
        <div className="flex flex-row justify-left items-center border-b-2 py-4 border-gray-400">
          <h1 className="text-4xl">{props.title}</h1>
          <div className="flex-grow"></div>
          <p className="text-white bg-blue-500 text-xs rounded-full py-2 px-4">
            Posted on {props.date}
          </p>
        </div>
      </div>
      <article className="prose sm:prose-sm max-w-none">
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
      <div className="text-blue-500 my-2 hover:text-blue-900 underline">
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
    </DefaultLayout>
  );
}

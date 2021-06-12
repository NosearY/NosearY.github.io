import PostLayout from "@layouts/post";
import { getPostBySlug, getAllPosts } from "@api";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export default function Post(props) {
  return (
    <PostLayout
      title={props.title}
      content={props.content}
      isHome={false}
      date={props.date}
    />
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await getPostBySlug(context.params.slug),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let allPosts = await getAllPosts();
  const paths = allPosts.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });
  return { paths, fallback: false };
};

import matter from "gray-matter";
import yaml from "js-yaml";
import marked from "marked";

export type AllPost = {
  slug: string;
  title: string;
  date: string;
}

type Post = {
  title: string;
  content: string;
  date: string;
}


export async function getAllPosts(): Promise<AllPost[]> {
  const context = require.context("../_posts", false, /\.md$/);
  console.log('context ', context.keys());
  const posts: AllPost[] = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default);
    console.log(`post ${post} content ${content} meta ${meta.data.title} ${meta.data.date}`)
    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
      date: meta.data.date,
    });
  }
  return posts;
}


export async function getPostBySlug(slug: string | string[]): Promise<Post> {
  const fileContent = await import(`../_posts/${slug}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title as string,
    content: content as string,
    date: meta.data.date as string,
  };
}

export const getConfig: any = async () => {
  const config = await import(`../config.yaml`);
  return yaml.load(config.default);
}

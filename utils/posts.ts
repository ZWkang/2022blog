import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const postPath = path.join(process.cwd(), 'posts');

function resolveExtname(filename) {
  const extname = path.extname(filename);
  const extnameLen = extname.length;
  const filenameLen = filename.length;

  return filename.slice(0, filenameLen - extnameLen);
}

export type Post = { path: string; originalFileName: string };

export async function getAllPost(): Promise<Array<Post>> {
  // 暂时不支持无限递归。
  const posts = await fs.promises.readdir(postPath);
  const resolvePathPosts = posts.map((post) => ({
    path: '/posts/' + resolveExtname(post),
    originalFileName: post,
  }));

  return resolvePathPosts;
}

export async function getPost(id: string) {
  try {
    const defaultPath = path.join(postPath, id + '.md');
    const fileContent = await fs.promises.readFile(defaultPath, 'utf-8');
    const parsePost = matter(fileContent);
    return parsePost;
  } catch (e) {
    console.log(e);
    return null;
  }
}

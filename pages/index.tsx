import { getAllPost, getPost, Post } from '../utils/posts';
import Header from '../components/header';
import * as path from 'path';
import pick from '../utils/pick';
import Footer from '../components/footer';

interface IHomePageType {
  posts: Array<
    Partial<{
      title: string;
      date: string;
      category: string[];
      headImage: string;
      abbr: string;
      slug: string;
      link: string;
    }>
  >;
}

function HomePage(props: IHomePageType) {
  const { posts } = props;
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header blogSiteName="zwkang"></Header>
      <section className="mx-auto mb-auto mt-12 container max-w-xl">
        <header>
          <h1 className="my-4 text-4xl logo">Post</h1>
        </header>
        <ul>
          {posts.map((post) => (
            <li key={post.title} className="my-1 text-gray-600">
              <a
                aria-label={post.abbr ?? post.title}
                className="underline cursor-pointer inline-block transition-colors duration-200 hover:text-gray-900 font-medium"
                href={post.link}
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <hr className="mt-4 mb-4" />
      <Footer />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const allPosts = await getAllPost();
  const postsResult = await Promise.all(
    allPosts.map(async (p) => {
      const result = await getPost(path.basename(p.path));
      const link = `/posts/${path.basename(p.path)}`;
      return {
        ...result,
        link,
      };
    })
  );
  const pickKeys = ['title', 'date', 'headImage', 'category', 'abbr', 'slug'];
  const posts = postsResult.map((o) => {
    return {
      ...pick(o.data, pickKeys),
      link: o.link,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

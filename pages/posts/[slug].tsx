import { getAllPost, getPost } from '../../utils/posts';
import { useRemoteRefresh } from 'next-remote-refresh/hook';
import Header from '../../components/header';
import Footer from '../../components/footer';
import markdownToHtml from '../../utils/markdown2html';

function Post(props) {
  const { post, slug, postData } = props;
  useRemoteRefresh({
    shouldRefresh: (path) => path.includes(slug),
  });

  const { date, title, author } = postData;
  return (
    <div>
      <Header blogSiteName="zwkang" />
      <div className="mx-auto mb-auto mt-12 container max-w-xl ">
        <main>
          <article>
            <header>
              <h1 className="text-4xl tracking-wide text-gray-900 font-bold">
                {title}
              </h1>
              <div className="mb-3 mt-2">
                <span className="text-gray-600">
                  {author.name ?? ''}
                  <time className="ml-4 text-gray-500 text-xs font-light">
                    {date}
                  </time>
                </span>
              </div>
              <picture>{/* <img /> */}</picture>
            </header>
            <div
              className="markdown-body mb-12 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post }}
            ></div>
          </article>
        </main>
      </div>
      <hr className="my-2" />
      <Footer />
    </div>
  );
}

export default Post;

export async function getStaticProps({ params, preview = false, previewData }) {
  const { slug } = params;
  const data = await getPost(slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const content = await markdownToHtml(data.content);

  return {
    props: {
      preview,
      slug,
      post: content,
      postData: data.data,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPost();
  const paths = allPosts.map((allPost) => allPost.path);
  return {
    paths: paths,
    fallback: false,
  };
}

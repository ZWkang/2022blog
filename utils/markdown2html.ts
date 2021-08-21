// from next.js examples https://github.com/vercel/next.js/tree/canary/examples/blog-starter

import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import parse from 'remark-parse';
import stringify from 'remark-stringify';

export default async function markdownToHtml(markdown) {
  // fix: dangerous
  const result = await remark()
    .use(parse)
    .use(stringify)
    .use(prism)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

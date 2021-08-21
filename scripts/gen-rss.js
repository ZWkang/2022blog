const matter = require('gray-matter');
const rss = require('rss');
const { promises } = require('fs');
const path = require('path');

const distOutputFolder = path.join(__dirname, '..', 'public');
const postSrcFolder = path.join(__dirname, '..', 'posts');
const ignoreMd = [];
const baseUrl = '/posts';

function getFileName(pathName) {
  return path.parse(pathName).name;
}

async function getPostFileContent(pathName) {
  return await promises.readFile(path.join(postSrcFolder, pathName), 'utf-8');
}

async function generatorRss() {
  const posts = await promises.readdir(postSrcFolder);
  const rssFeed = new rss();

  async function job(postName) {
    if (ignoreMd.includes(postName)) {
      return;
    }
    const postContent = await getPostFileContent(postName);
    const matterData = matter(postContent);
    const { content, data = {}, isEmpty } = matterData;

    if (isEmpty) return; // skip empty
    const {
      title = '',
      url,
      date = '',
      description = '',
      tag = '',
      author = { name: '' },
    } = data;

    rssFeed.item({
      title: title,
      url: url ? url : baseUrl + '/' + getFileName(postName),
      date: date,
      description: description,
      categories: tag.split(', '),
      author: author.name,
    });
  }

  await Promise.all(posts.map(job));

  await promises.writeFile(
    path.join(distOutputFolder, 'rss.xml'),
    rssFeed.xml({ indent: true })
  );
}

generatorRss();

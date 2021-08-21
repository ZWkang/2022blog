const parseStringPromise = require('xml2js').parseStringPromise;
const { promises: fs } = require('fs');

async function xmlParse(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const obj = await parseStringPromise(content);
  console.log(Object.keys(obj.rss.channel[0].item[0]));
  console.log(Object.keys(obj.rss.channel[0].item[0]['wp:post_id']));
  return obj;
}

xmlParse(process.argv[2]);

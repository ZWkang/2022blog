const path = require('path');
const fs = require('fs');

function writeSingleFile(json) {
  let result = `---
title: '${json.title}'
date: '${json.lastEditedAt}'
author:
  name: ${json.author}
---
${json.body}`;
  return result;
}

async function writeFiles() {
  const sourcePath = 'a.json';
  const source = path.join(process.cwd(), sourcePath);
  const distPath = path.join(process.cwd(), 'posts');

  const json = require(source);
  const keys = Object.keys(json);
  for (const key of keys) {
    const file = writeSingleFile(json[key]);
    fs.writeFileSync(path.join(distPath, key + '.md'), file);
  }

  return;
}

writeFiles();

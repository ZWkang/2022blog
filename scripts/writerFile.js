const { promises: fs } = require('fs');

async function writerFile(path, fileContent) {
  return await fs.writeFile(path, fileContent);
}

module.exports = {
  writerFile,
};

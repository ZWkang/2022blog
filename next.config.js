const withRemoteRefresh = require('next-remote-refresh')({
  paths: [__dirname + '/posts/*.md'],
  ignored: '**/*.json',
});
console.log(__dirname + '/post/*.md');
const nextConfig = {};

module.exports = withRemoteRefresh(nextConfig);

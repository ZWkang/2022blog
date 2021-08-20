const { ISSUE_TEMPLATE, ISSUE_TOTAL } = require('./issue-template');
const { GraphQLClient } = require('graphql-request');
const debug = require('debug')('blog-zwkang:gen-issue');

const entryPointer = '';
const githubToken = '';

async function genIssuePost() {
  const client = new GraphQLClient(entryPointer, {
    headers: {
      Authorization: `bearer ${githubToken}`,
    },
  });
  const total = await client.request(ISSUE_TOTAL);
  const {
    repository: {
      issues: { totalCount },
    },
  } = total;

  const posts = await client.request(ISSUE_TEMPLATE, {
    first: totalCount,
  });

  let {
    repository: {
      issues: { nodes },
    },
  } = posts;

  debug(nodes);

  return nodes;
}

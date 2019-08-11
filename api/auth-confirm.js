const query = require("micro-query");
const Octokit = require("@octokit/rest");
const githubCache = require("./cache/github-oauth-token");

module.exports = async (req, res) => {
  const { token } = query(req);
  const oauthToken = githubCache.get(token);
  const kit = new Octokit({ auth: oauthToken });
};

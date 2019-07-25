const query = require("micro-query");
const Octokit = require("@octokit/rest");
const githubCache = require("../../lib/cache/githubToken");

module.exports.path = "/aprejni/auth/confirm";
module.exports.GET = async (req, res) => {
  const { token } = query(req);
  const oauthToken = githubCache.get(token);
  const kit = new Octokit({ auth: oauthToken });
};

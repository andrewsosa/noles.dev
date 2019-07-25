const { send } = require("micro");
const query = require("micro-query");
const githubCache = require("../../lib/cache/githubToken");

module.exports.path = "/api/auth/token";
module.exports.GET = async (req, res) => {
  const { hash } = query(req);
  const token = githubCache.get(hash);
  return token ? send(res, 200, token) : send(res, 404);
};

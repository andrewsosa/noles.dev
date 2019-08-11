const axios = require("axios");
const query = require("micro-query");
const redirect = require("micro-redirect");
const githubCache = require("../../cache/githubToken");

const {
  GITHUB_CLIENT_ID: client_id, // eslint-disable-line camelcase
  GITHUB_CLIENT_SECRET: client_secret, // eslint-disable-line camelcase
} = process.env;

module.exports = async (req, res) => {
  const { code } = query(req);

  console.log({ client_id, client_secret, code });

  const { data: oauthToken } = await axios.post(
    "https://github.com/login/oauth/access_token",
    { client_id, client_secret, code },
  );

  const { WEBHOST: host } = process.env;
  const ref = githubCache.put(oauthToken);

  redirect(res, 302, `${host}/confirm?token=${ref}`);
});

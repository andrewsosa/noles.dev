/* Initial OAuth flow by redirecting to Github */

require("../config");

const querystring = require("querystring");

const baseUrl = `https://github.com/login/oauth/authorize?`;
const params = querystring.stringify({
  scope: "user:email",
  client_id: process.env.GITHUB_CLIENT_ID,
});

console.log(params);

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => ({
  statusCode: 302,
  headers: { Location: baseUrl + params },
  body: "Redirecting...",
});

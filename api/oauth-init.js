/* Initial OAuth flow by redirecting to Github */

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  require("dotenv").config();
}

const querystring = require("querystring");

const baseUrl = `https://github.com/login/oauth/authorize?`;
const params = querystring.stringify({
  scope: "user:email",
  client_id: process.env.GITHUB_CLIENT_ID,
  redirect_uri:
    process.env.NODE_ENV === "production"
      ? "https://noles.dev/signup"
      : "http://localhost:8888/signup",
});

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => ({
  statusCode: 302,
  headers: { Location: baseUrl + params },
  body: "Redirecting...",
});

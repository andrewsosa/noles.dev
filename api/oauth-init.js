/* Initial OAuth flow by redirecting to Github */

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  require("dotenv").config();
}

const clientId = process.env.GITHUB_CLIENT_ID;
const githubAuthUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientId}`;

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => ({
  statusCode: 302,
  headers: { Location: githubAuthUrl },
  body: "Redirecting...",
});

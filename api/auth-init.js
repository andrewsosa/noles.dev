/* Initial OAuth flow by redirecting to Github */

const clientId = process.env.GITHUB_CLIENT_ID;
const githubAuthUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientId}`;

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => ({
  statusCode: 301,
  headers: { Location: githubAuthUrl },
});

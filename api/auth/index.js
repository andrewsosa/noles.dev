const redirect = require("micro-redirect");

const clientId = process.env.GITHUB_CLIENT_ID;
const githubAuthUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientId}`;

module.exports = (req, res) => redirect(res, 302, githubAuthUrl);

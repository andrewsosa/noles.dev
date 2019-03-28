require("dotenv").config();

const { send } = require("micro");
const { router, get } = require("microrouter");
const redirect = require("micro-redirect");

const clientId = process.env.GITHUB_CLIENT_ID;
const githubAuthUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientId}`;

const auth = (req, res) => redirect(res, 302, githubAuthUrl);

const callback = (req, res) => send(res, 200, "callback!!");

module.exports = router(
  get("/api/auth", auth),
  get("/api/auth/callback", callback),
);

const axios = require("axios");
const Octokit = require("@octokit/rest");
const cache = require("./lib/cache");

const {
  GITHUB_CLIENT_ID: client_id, // eslint-disable-line camelcase
  GITHUB_CLIENT_SECRET: client_secret, // eslint-disable-line camelcase
} = process.env;

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => {
  const { code } = JSON.parse(event.body);

  // Ask github for the OAuth Access Token
  const { data } = await axios.post(
    "https://github.com/login/oauth/access_token",
    { client_id, client_secret, code },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  // Github oauth response
  console.log("Github Response:", data);
  const { access_token: authtoken, _type, scope } = data;
  const kit = new Octokit({ auth: `token ${authtoken}` });

  // Get the user's standard data, then add emails
  const { data: userdata } = await kit.users.getAuthenticated();
  const { data: emails } = await kit.users.listEmails();
  userdata.emails = emails;

  // Generate and send a secure token which the app can send
  // back to confirm the join process. (300s TTL)
  userdata.confirmToken = cache.oauth.put(
    "confirm",
    300,
    JSON.stringify({
      login: userdata.login,
      emails: userdata.emails,
    })
  );

  // Send userdata back to app
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userdata),
  };
};

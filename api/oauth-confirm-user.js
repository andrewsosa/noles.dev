require("../config");

const axios = require("axios");
const cache = require("./lib/cache");
const db = require("./lib/db");

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => {
  // Token to cache storing user handle
  const { token } = JSON.parse(event.body);
  const { login, emails } = JSON.parse(await cache.oauth.get("confirm", token));

  // Attempt to save the user
  let result = true;
  try {
    if (db.users().checkUser(login))
      console.log(`${login} already member, skipping...`);
    else {
      console.log("Adding", login);
      db.users().addUser(login, emails);
    }
  } catch (err) {
    result = false;
  }

  // Send userdata back to app
  return {
    statusCode: result ? 200 : 500,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      result: result ? "OK" : "Error...",
    }),
  };
};

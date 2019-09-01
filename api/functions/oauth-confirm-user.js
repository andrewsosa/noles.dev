const cache = require("../lib/cache");
const db = require("../lib/db");
const middleware = require("../lib/middleware");

// eslint-disable-next-line no-unused-vars
module.exports.handler = middleware(async (event, context) => {
  // Token to cache storing user handle
  const { token } = JSON.parse(event.body);
  const { login, emails } = JSON.parse(
    await cache.open().oauth.get("confirm", token)
  );
  cache.close();

  // Attempt to save the user
  let result = true;
  try {
    if (await db.users().findUser(login))
      console.log(`${login} already member, skipping...`);
    else {
      console.log("Adding", login);
      await db.users().addUser(login, emails);
    }
  } catch (err) {
    result = false;
  }

  // Close db connection
  db.conn.close();

  // Send userdata back to app
  return {
    statusCode: result ? 200 : 500,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      result: result ? "OK" : "Error...",
    }),
  };
});

const axios = require("axios");
const shuffle = require("shuffle-array");

const cache = require("../lib/cache");
const db = require("../lib/db");
const middleware = require("../lib/middleware");

const githubUrl = username => `https://api.github.com/users/${username}`;

const loadSingleUser = async username => {
  try {
    const data = await cache.userdata.get(username);
    if (data) {
      console.log("Using cache for", username);
      console.log("Found data:", data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }

  try {
    console.log("Hitting remote for", username);
    const { data } = await axios.get(githubUrl(username));
    cache.userdata.put(username, 300, data);
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

// eslint-disable-next-line no-unused-vars
const getUsers = async (event, context, callback) => {
  // Load users from db
  const users = shuffle(await db.users().getAll());
  db.conn.close();

  // get userdata from github
  cache.open();
  const data = await Promise.all(users.map(loadSingleUser));
  cache.close();

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  };
};

module.exports.handler = middleware(getUsers);

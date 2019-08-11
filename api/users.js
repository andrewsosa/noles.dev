const mcache = require("memory-cache");
const axios = require("axios");
const shuffle = require("shuffle-array");

const cacheKey = username => `__userdata__${username}`;
const githubUrl = username => `https://api.github.com/users/${username}`;

const loadSingleUser = async username => {
  console.log("loading", username);
  const key = cacheKey(username);
  let data = mcache.get(key);
  if (data) return data;

  try {
    ({ data } = await axios.get(githubUrl(username)));
    mcache.put(key, data, 60 * 60 * 1000);
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => {
  const users = shuffle([
    "andrewsosa",
    "glfmn",
    "marlanmct",
    "manterolat",
    "jfreedman0212",
    "keishon104",
    "masudias",
    "ScheerMT",
    "CFarzaneh",
    "mougharik",
  ]);

  const data = await Promise.all(users.map(loadSingleUser));

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  };
};

const crypto = require("crypto");
const mcache = require("memory-cache");

const timeout = 5 * 60 * 1000;
const key = id => `githubToken__${id}`;

module.exports = {
  get: hash => mcache.get(key(hash)),
  put: token => {
    const hash = crypto.randomBytes(64).toString("hex");
    mcache.put(key(hash), token, timeout);
    return hash;
  },
};

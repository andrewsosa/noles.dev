require("../../config");

const crypto = require("crypto");
const redis = require("redis");

const { REDIS_HOST, REDIS_PASSWORD } = process.env;
const client = redis.createClient(`redis://:${REDIS_PASSWORD}@${REDIS_HOST}/0`);

const key = (tag, token) => `${tag}__${token}`;

module.exports = {
  oauth: {
    get: async (tag, token) =>
      new Promise((res, rej) =>
        client.get(key(tag, token), (err, reply) =>
          err ? rej(err) : res(reply)
        )
      ),
    put: (tag, ttl, value) => {
      const token = crypto.randomBytes(64).toString("hex");
      client.setex(key(tag, token), ttl, value);
      return token;
    },
  },
  userdata: {
    get: async username =>
      new Promise((res, rej) =>
        client.get(key("userdata", username), (err, reply) =>
          err ? rej(err) : res(JSON.parse(reply))
        )
      ),
    put: (username, ttl, data) => {
      client.setex(key("userdata", username), ttl, JSON.stringify(data));
    },
  },
  client, // so tests can close the client
};

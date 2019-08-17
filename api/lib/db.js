// eslint-disable-next-line global-require
if (process.env.NODE_ENV === undefined) require("dotenv").config();

// Only prod users userdb
let dbkey = "users";
if (
  process.env.NODE_ENV === undefined ||
  process.env.NODE_ENV.toLowerCase() === "development"
) {
  dbkey = "users-test";
}

const db = require("monk")(process.env.MONGO_URI);

module.exports = {
  db,
  users: () => {
    const users = db.get(dbkey);
    return {
      addUser: async (username, emails) => users.insert({ username, emails }),
      checkUser: async username => users.findOne({ username }),
      getAll: async () => users.distinct("username"),
      delUser: async username => users.remove({ username }),
    };
  },
};

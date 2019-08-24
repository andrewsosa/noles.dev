require("../../config");

const db = require("monk")(process.env.MONGO_URI);
const dbkey = process.env.DB_KEY;

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

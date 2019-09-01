const monk = require("monk");

const db = monk(process.env.MONGO_URI);
const dbkey = process.env.DB_KEY;

module.exports = {
  conn: db,
  users: () => {
    const users = db.get(dbkey);
    return {
      addUser: async (username, emails) => users.insert({ username, emails }),
      findUser: async username => users.findOne({ username }),
      getAll: async () => users.distinct("username"),
      delUser: async username => users.remove({ username }),
    };
  },
};

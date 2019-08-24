const path = require("path");

process.env.NODE_ENV = process.env.CONTEXT || "development";

if (process.env.NODE_ENV === "development") {
  console.log("ENABLING DEV ENV");
  // eslint-disable-next-line array-callback-return
  ["DB_KEY", "GITHUB_CLIENT_ID", "GITHUB_CLIENT_SECRET"].map(el => {
    delete process.env[el];
  });

  // eslint-disable-next-line global-require
  require("dotenv").config({
    path: path.join(__dirname, `.env.development`),
  });

  console.log(process.env);
}

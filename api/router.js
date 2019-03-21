/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/newline-after-import: 0 */

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const cors = require("micro-cors")();
const final = require("finalhandler");
const logger = require("morgan")("dev");
const Router = require("router");

// Dispatches request to the correct route
const dispatch = handler => {
  const router = Router();
  handler.map(r => router.route(r.url).all(r.fn));
  return (req, res) => router(req, res, final(req, res));
};

// Read routes from folder
const routes = fs
  .readdirSync(path.join(__dirname, "routes"))
  .filter(el => el.endsWith(".js"))
  .map(name => name.replace(/\.js/, ""))
  .map(r => ({
    url: `/api/${r}/*`,
    fn: require(`./routes/${r}`),
  }));

// Make sure route ends with /
const postend = fn => (req, res) => {
  if (!req.url.endsWith("/")) req.url += "/";
  fn(req, res);
};

// Use logger in prod, not in dev.
const log =
  process.env.NODE_ENV === "development"
    ? fn => (req, res) => fn(req, res)
    : fn => (req, res) => logger(req, res, () => fn(req, res));

module.exports = cors(log(postend(dispatch(routes))));

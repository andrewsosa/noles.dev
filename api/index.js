const cors = require("micro-cors")();
const path = require("path");
const fsrouter = require("fs-router");
const { send } = require("micro");

const match = fsrouter(path.join(__dirname, "/routes"));

const router = async (req, res) => {
  const matched = match(req);
  if (matched) return await matched(req, res);
  send(res, 404, { error: "Not found" });
};

module.exports = cors(router);

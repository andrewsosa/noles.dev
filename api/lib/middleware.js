const middy = require("middy");
const {
  cors,
  doNotWaitForEmptyEventLoop,
  httpErrorHandler,
  httpHeaderNormalizer,
} = require("middy/middlewares");

module.exports = handler =>
  middy(handler)
    .use(httpErrorHandler())
    .use(httpHeaderNormalizer())
    .use(cors());
// .use(doNotWaitForEmptyEventLoop());

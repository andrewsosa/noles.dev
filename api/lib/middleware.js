const middy = require("middy");
const {
  cors,
  doNotWaitForEmptyEventLoop,
  httpErrorHandler,
  httpHeaderNormalizer,
} = require("middy/middlewares");

module.exports = handler =>
  middy(handler)
    .use(cors())
    .use(httpHeaderNormalizer())
    .use(httpErrorHandler())
    .use(doNotWaitForEmptyEventLoop());

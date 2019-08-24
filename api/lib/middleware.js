const middy = require("middy");
const {
  httpErrorHandler,
  httpHeaderNormalizer,
  cors,
} = require("middy/middlewares");

module.exports = handler =>
  middy(handler)
    .use(cors())
    .use(httpHeaderNormalizer())
    .use(httpErrorHandler());

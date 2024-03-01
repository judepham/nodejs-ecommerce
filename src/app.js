const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init database
//
// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello";
  return res.status(200).json({
    message: "Welcome to the API",
    metadata: strCompress.repeat(100000),
  });
});
//
// handle errors

module.exports = app;

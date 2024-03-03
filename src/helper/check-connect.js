"use strict";
const os = require("os");
const _SECONDS = 5000;
const mongoose = require("mongoose");
const { log } = require("console");
const countConnect = () => {
  const connectionCount = mongoose.connections.length;
  console.log(`Number of connections: ${connectionCount}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    console.log(`Number of active connections: ${numConnections}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnections > maxConnections) {
      console.log(`Number of active connections is overloading!`);
    }
  }, _SECONDS);
};

module.exports = { countConnect, checkOverload };

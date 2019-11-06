const express = require("express");
const helmet = require("helmet");

const db = require('../data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api", (req, res) => {
    db("cars")
      .then(cars => res.status(200).json(cars))
  
      .catch(error =>
        res.status(500).json({
          Error: "Your attempt to retrieve the vehicles has failed."
        })
      );
  });

module.exports = server;
const express = require("express");
const helmet = require("helmet");

const db = require('../data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    db("cars")
      .then(cars => res.status(200).json(cars))
  
      .catch(error =>
        res.status(500).json({
          Error: "Your attempt to retrieve the vehicles has failed."
        })
      );
  });

  server.get("/api/:id", (req, res) => {
      const id = req.params.id;
    db("cars")
    .where({id})
    .first()
    .then(car => {
        res.status(200).json(car);
    })
  
      .catch(error =>
        res.status(500).json({
          Error: "That vehicle was not found."
        })
      );
  });

module.exports = server;
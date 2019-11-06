const express = require("express");
const helmet = require("helmet");

const db = require("../data/db-config.js");

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
    .where({ id })
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

server.post("/", (req, res) => {
  const data = req.body;
  db("cars")
    .insert(data, "id")
    .then(newCar => {
      res.status(200).json({ Success: "The vehicle was successfully added." });
    })
    .catch(error =>
      res.status(500).json({
        Failure: "The vehicle was not added."
      })
    );
});

server.put('/api/:id', (req, res) => {
    const modify = req.body;
    db('cars')
    .where("id", req.params.id)
    .update(modify)
    .then(car =>
        res.status(200).json({Success: "The vehicle info was updated."}))
    .catch(error => res.status(500).json({
        Failure: "The vehicle info was not updated."
    }))
});

server.delete('/api/:id', (req, res) => {
    const id = req.params.id;

    db('cars')
    .where("id", req.params.id)
    .delete(id)
    .then(res.status(200).json({
        Success: "The vehicle was successfully removed."
    }))
    .catch(error => res.status(500).json({
        Error: "That vehicle was not found."
    }))
});

module.exports = server;

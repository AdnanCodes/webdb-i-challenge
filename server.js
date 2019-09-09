const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => res.status(200).json(accounts))
    .catch(error => res.status(500).json(error));
});

server.get("/:id", (req, res) => {
  const { id } = req.params;

  db("accounts")
    .where({ id })
    .first()
    .then(posts => res.status(200).json(posts))
    .catch(err => res.json(err));
});

server.post("/", ValidateResource, (req, res) => {});

server.put("/:id", (req, res) => {});

server.delete("/:id", (req, res) => {});

function ValidateResource(req, res, next) {
  if (req.body.name === undefined) {
    res.status(400).json({
      errorMessage: "Make sure your project has name field"
    });
  } else if (req.body.budget === undefined) {
    res.status(400).json({
      errorMessage: "Make sure your project has budget field"
    });
  } else {
    next();
  }
}

module.exports = server;

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

server.post("/", (req, res) => {});

server.put("/:id", (req, res) => {});

server.delete("/:id", (req, res) => {});

module.exports = server;

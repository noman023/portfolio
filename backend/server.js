/**
 * It's the backend of portfolio project that takes a http request from the client and returns appropriate response with the data.
 */

const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

// import all data
const about = require("./data/about");
const projects = require("./data/projects");
const footer = require("./data/footer");

app.get("/", (req, res) => {
  res.json(about);
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.get("/footer", (req, res) => {
  res.json(footer);
});

app.listen(port, () => {
  console.log(`The server is listenning on port ${port}`);
});

/**
 * It's the backend of portfolio project that takes a http request from the client and returns appropriate response with the data.
 */

const http = require("http");

const about = require("./data/about");
const projects = require("./data/projects");
const footer = require("./data/footer");

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(about));
  } else if (req.url === "/projects") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(projects));
  } else if (req.url === "/footer") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(footer));
  } else {
    res.writeHead(400, {
      "Content-Type": "text/plain",
    });

    res.end("Bad Request");
  }
});

const PORT = 4000;

server.listen(PORT, "localhost", () => {
  console.log(`The server is listenning on port ${PORT}`);
});

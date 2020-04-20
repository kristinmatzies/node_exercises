import path from "path";
import express from "express";

const cvController = require("./routes/cv");
const jobsController = require("./routes/jobs");
const hobbiesController = require("./routes/hobbies");

const server = express();

server.get("/", cvController);

server.get("/cv.css", (req, res) => {
  res.sendFile(path.join(__dirname, "cv.css"));
});

server.get("/jobs", jobsController);

server.get("/hobbies", hobbiesController);

server.listen(8080);

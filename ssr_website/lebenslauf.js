import path from "path";
import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "cv.html"));
});

server.get("/cv.css", (req, res) => {
  res.sendFile(path.join(__dirname, "cv.css"));
});

server.get("/jobs", (req, res) => {
  res.sendFile(path.join(__dirname, "jobs.html"));
});

server.get("/hobbies", (req, res) => {
  res.sendFile(path.join(__dirname, "hobbies.html"));
});

server.listen(8080);

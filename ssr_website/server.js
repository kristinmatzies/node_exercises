import path from "path";
import express from "express";
import cvController from "./routes/cv"; // hier nimmt er automatisch die .js-Datei
import jobsController from "./routes/jobs"; // hier nimmt er automatisch die .js-Datei
import hobbiesController from "./routes/hobbies"; // hier nimmt er automatisch die .js-Datei

const server = express();

server.get("/", cvController);

server.get("/cv.css", (req, res) => {
  res.sendFile(path.join(__dirname, "cv.css"));
});

server.get("/jobs", jobsController);

server.get("/hobbies", hobbiesController);

server.listen(8080);

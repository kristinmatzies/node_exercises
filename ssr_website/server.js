import bodyParser from "body-parser";
import express from "express";
import cvController from "./routes/cv"; // hier nimmt er automatisch die .js-Datei
import jobsController from "./routes/jobs";
import hobbiesController from "./routes/hobbies";
import contactForm from "./routes/contact";
import styles from "./routes/styles";
import saveController from "./routes/contact-save";
import productRoutes from "./product"

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/api-db", productRoutes)

server.get("/", cvController);

server.get("/styles.css", styles);

server.get("/jobs", jobsController);

server.get("/hobbies", hobbiesController);

server.get("/contact", contactForm);
server.post("/save", saveController);

server.listen(8080);

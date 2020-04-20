import path from "path";

export default (reg, res) => {
  res.sendFile(path.join(__dirname, "cv.json"));
};

import path from "path";

module.exports = (reg, res) => {
  res.sendFile(path.join(__dirname, "hobbies.html"));
};

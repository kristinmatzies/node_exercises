import path from "path";

export default (req, res) => {
    res.sendFile(path.join(__dirname, "styles.css"));
  }
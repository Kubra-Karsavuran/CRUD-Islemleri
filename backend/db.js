const express = require("express");
const app = express();

var shema = require("./shema");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/crusPush", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json()); // verı json kabul eder

const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.get("/api/kayitYap", (req, res) => {
  //   shema.insertMany(req.params);
});

const port = 3000;
app.listen(port, () => {
  console.log("Node js http sıkıntısız bır sekılde calıstı");
});

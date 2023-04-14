const express = require("express");
const app = express();

var shema = require("./shema");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/crudPush", {
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

app.post("/api/kayitYap", (req, res) => {
  console.log("fonk geliyor");
  shema.insertOne(req.body);
  // shema.create(req.body);
});

const port = 3000;
app.listen(port, () => {
  console.log("Node js http sıkıntısız bır sekılde calıstı");
});

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

// TODO KAYDETME İŞLEMİ
app.post("/api/kayitYap", (req, res) => {
  shema.insertOne(req.body);
});

// TODO YANSITMA İŞLEMİ
app.get("/api/veriler", (req, res) => {
  shema.find({}).then((posts) => {
    res.send(posts);
  });
});

// TODO BAĞLANTI
const port = 3000;
app.listen(port, () => {
  console.log("Node js http sıkıntısız bır sekılde calıstı");
});

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
  shema.create(req.body);
});

// TODO YANSITMA İŞLEMİ
app.get("/api/veriler", (req, res) => {
  shema.find({}).then((posts) => {
    res.send(posts);
  });
});

// TODO SİLME İŞLEMİ
//direkt id verisi geliyor
app.get("/api/kayitSil/:silmeislemi", (req, res) => {
  console.log("silinecek verının verılerı: " + req.params.silmeislemi);
  const id = req.params.silmeislemi;
  shema.findByIdAndDelete(id).then((posts) => {
    console.log("silme işlemi oldu");
  });
});

// TODO guncelleme ıslemı yapılacak
app.post("/api/Update", (req, res) => {
  // guncelleme işlemi yapılacak burda
  console.log(req.body);
  console.log(req.body.updateVerileri);
  console.log(req.body.guncel_veri_id);
});

// TODO BAĞLANTI
const port = 3000;
app.listen(port, () => {
  console.log("Node js http sıkıntısız bır sekılde calıstı");
});

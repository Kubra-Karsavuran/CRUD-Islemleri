const mongoose = require("mongoose");

const shema = new mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  departman: { type: String },
  tel: { type: Number },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("crud_alistirma", shema);

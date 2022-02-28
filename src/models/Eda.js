const mongoose = require("mongoose");
const { stringify } = require("querystring");

const edaSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  login: { type: String, required: true },
  pass: { type: String, required: true },
  name: { type: String, required: true },
  status: {
    ref: { type: String },
    sor: { type: Number },
    hab: { type: Number },
    ene: { type: Number },
    pocoes: { type: Number },
    provisoes: { type: Number },
    joias: { type: Number },
    ouro: { type: Number },
    items: { type: Array },
  },
  attempts: { type: Number },
});

module.exports = mongoose.model("Eda", edaSchema);

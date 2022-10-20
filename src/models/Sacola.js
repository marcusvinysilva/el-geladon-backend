const mongoose = require("mongoose");

const SacolaSchema = new mongoose.Schema({
  paletaId: {
    type: String,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
});

const Sacola = mongoose.model("sacola", SacolaSchema);

module.exports = Sacola;

const mongoose = require('mongoose');

const Cities = new mongoose.Schema({
  codeCity: {
    type: Number,
  },
  title: {
    type: String,
  },
});

const CitiesModel = mongoose.model('Cities', Cities);

module.exports = CitiesModel;

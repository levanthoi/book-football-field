const mongoose = require('mongoose');

const Districts = new mongoose.Schema({
  codeDistrict: {
    type: Number,
  },
  title: {
    type: String,
  },
  codeCity: {
    type: Number,
  },
});

const DistrictsModel = mongoose.model('Districts', Districts);

module.exports = DistrictsModel;

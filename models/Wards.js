const mongoose = require('mongoose');

const Wards = new mongoose.Schema({
  codeWard: {
    type: Number,
  },
  title: {
    type: String,
  },
  codeDistrict: {
    type: Number,
  },
});

const WardsModel = mongoose.model('Wards', Wards);

module.exports = WardsModel;

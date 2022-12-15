const mongoose = require('mongoose');

const SaleOff = new mongoose.Schema(
  {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    startDay: {
      type: Date,
      default: Date.now(),
    },
    startEnd: {
      type: Date,
      default: Date.now(),
    },
    idPitch: {
      type: String,
    },
  },
  { timestamps: true }
);

const SaleOffModel = mongoose.model('SaleOff', SaleOff);

module.exports = SaleOffModel;

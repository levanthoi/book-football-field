const mongoose = require('mongoose');

const Booking = new mongoose.Schema(
  {
    idPitch: {
      type: String,
    },
    timeStart: {
      type: Date,
      default: Date.now(),
    },
    timeEnd: {
      type: Date,
      default: Date.now(),
    },
    day: {
      type: Date,
      default: Date.now(),
    },
    idUser: {
      type: String,
    },
    isPaypal: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: 0,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const BookingModel = mongoose.model('Booking', Booking);

module.exports = BookingModel;

const mongoose = require('mongoose');

const Pitchs = new mongoose.Schema(
  {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    phone: {
      type: Number,
      default: null,
    },
    typePitch: {
      type: Number,
    },
    idOwner: {
      type: String,
    },
    codeCity: {
      type: Number,
    },
    codeDistrict: {
      type: Number,
    },
    codeWard: {
      type: Number,
    },
    isSaleOff: {
      type: Boolean,
      default: false,
    },
    isBooking: {
      type: Boolean,
      default: false,
    },
    countBooking: {
      type: Number,
      default: 0,
    },
    timeOpen: {
      type: String,
      default: '',
    },
    timeEnd: {
      type: String,
      default: '',
    },
    listPrice: {
      type: Array,
      default: [],
    },
    services: {
      type: Array,
      default: [],
    },
    vote: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const PitchsModel = mongoose.model('Pitchs', Pitchs);

module.exports = PitchsModel;

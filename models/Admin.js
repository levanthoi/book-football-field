const mongoose = require('mongoose');

const Admin = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    accessToken: {
      type: String,
      default: '',
    },
    refeshToken: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model('Admin', Admin);

module.exports = AdminModel;

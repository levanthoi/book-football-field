const mongoose = require('mongoose');

const Users = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 6,
      max: 20,
      required: true,
    },
    phoneNumber: {
      type: Number,
      default: null,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    statusActive: {
      type: Boolean,
      default: false,
    },
    lastActiveAt: {
      type: Date,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    roleId: {
      type: Number,
      default: 1,
    },
    positionId: {
      type: Number,
    },
    gender: {
      type: String,
      default: '',
    },
    birthday: {
      type: Date,
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

const UsersModel = mongoose.model('Users', Users);

module.exports = UsersModel;

const mongoose = require('mongoose');

const Blogs = new mongoose.Schema(
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
    idTypeBlog: {
      type: Number,
      default: 43,
    },
    image: {
      type: String,
      default: '',
    },
    idCreater: {
      type: String,
    },
    countRead: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const BlogsModel = mongoose.model('Blogs', Blogs);

module.exports = BlogsModel;

/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

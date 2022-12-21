/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    ...process.env,
    APP_NAME: process.env.APP_NAME,
    APP_TYPE: process.env.APP_TYPE,
    PORT: process.env.PORT,
    APP_URL: process.env.APP_URL,
    CSS_URL: process.env.CSS_URL,
    API_SERVER: process.env.API_SERVER,
    IMAGE_SERVER: process.env.IMAGE_SERVER,
    SITE_SAN_PHAM: process.env.SITE_SAN_PHAM,
    SITE_THONG_TIN: process.env.SITE_THONG_TIN,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

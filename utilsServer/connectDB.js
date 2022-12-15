const mongoose = require('mongoose');

function connectDB(urlDB) {
  try {
    mongoose.set('strictQuery', true);
    mongoose
      .connect(urlDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connect DB success');
      });
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;

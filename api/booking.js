const router = require('express').Router();
const BookingModel = require('../models/Booking.js');

router.get('/getlist', async (req, res) => {
  try {
    await BookingModel.find()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/getone/:idBooking', async (req, res) => {
  try {
    const { idBooking } = req.params;
    const idSlice = idBooking.slice(1);
    if (idSlice) {
      await BookingModel.findById(idSlice)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/addone', async (req, res) => {
  try {
    const { data } = req.body;
    await BookingModel.create(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/updateone/:idBooking', async (req, res) => {
  try {
    const { data } = req.body;
    const { idBooking } = req.params;
    const idSlice = idBooking.slice(1);
    if (idSlice) {
      await BookingModel.findByIdAndUpdate(idSlice, data)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/deleteone/:idBooking', async (req, res) => {
  try {
    const { idBooking } = req.params;
    const idSlice = idBooking.slice(1);
    if (idSlice) {
      await BookingModel.findByIdAndDelete(idSlice)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

module.exports = router;

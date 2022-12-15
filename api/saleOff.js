const router = require('express').Router();
const SaleOffModel = require('../models/SaleOff.js');

router.get('/getlist', async (req, res) => {
  try {
    await SaleOffModel.find()
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

router.get('/getone/:idSale', async (req, res) => {
  try {
    const { idSale } = req.params;
    const idSlice = idSale.slice(1);
    if (idSlice) {
      await SaleOffModel.findById(idSlice)
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
    await SaleOffModel.create(data)
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

router.put('/updateone/:idSale', async (req, res) => {
  try {
    const { data } = req.body;
    const { idSale } = req.params;
    const idSlice = idSale.slice(1);
    if (idSale) {
      await SaleOffModel.findByIdAndUpdate(idSlice, data)
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

router.delete('/deleteone/:idSale', async (req, res) => {
  try {
    const { idSale } = req.params;
    const idSlice = idSale.slice(1);
    if (idSale) {
      await SaleOffModel.findByIdAndDelete(idSlice)
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

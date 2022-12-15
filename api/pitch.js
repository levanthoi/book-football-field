const router = require('express').Router();
const PitchsModel = require('../models/Pitchs.js');

router.get('/getlist', async (req, res) => {
  await PitchsModel.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/getone/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const idSlice = id.slice(1);
    await PitchsModel.findById(idSlice)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    res.status(500).json('Lỗi!!');
  }
});

router.post('/addone', async (req, res) => {
  const { data } = req.body;
  if (data) {
    await PitchsModel.create(data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

router.put('/updateone/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  if (id && data) {
    const idSlice = id.slice(1);
    await PitchsModel.findByIdAndUpdate(idSlice, data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

router.delete('/deleteone/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const idSlice = id.slice(1);
    await PitchsModel.findByIdAndDelete(idSlice)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

module.exports = router;

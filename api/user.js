const router = require('express').Router();
const UsersModel = require('../models/Users.js');
const verifyMiddleware = require('../middleware/verifyMiddleware.js');

router.get('/getlist', verifyMiddleware.verifyAdmin, async (req, res) => {
  try {
    const listUsers = await UsersModel.find();
    res.status(200).json(listUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/getone/:id', verifyMiddleware.verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const idSlice = id.slice(1);
    const user = await UsersModel.findOne({ _id: idSlice });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/updateone/:id', async (req, res) => {
  try {
    const { data } = req.body.data;
    const { id } = req.params;
    const idSlice = id.slice(1);
    await UsersModel.findByIdAndUpdate(idSlice, data)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } catch (err) {
    if (err) throw err;
  }
});

router.delete('/deleteone/:id', verifyMiddleware.verifyAdmin, async (req, res) => {
  const { id } = req.params;
  const idSlice = id.slice(1);
  await UsersModel.findByIdAndDelete({ idSlice })
    .then(() => {
      res.status(200).json('Delete user success');
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

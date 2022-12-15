const router = require('express').Router();
const CitiesModel = require('../models/Cities.js');
const DistrictsModel = require('../models/Districts.js');
const WardsModel = require('../models/Wards.js');

router.get('/getlistCity', async (req, res) => {
  try {
    await CitiesModel.find()
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

router.get('/getlistDistrict/:codeCity', async (req, res) => {
  try {
    const { codeCity } = req.params;
    const codeCitySlice = codeCity.slice(1);
    await DistrictsModel.find({ codeCity: codeCitySlice })
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

router.get('/getlistWard/:codeDistrict', async (req, res) => {
  try {
    const { codeDistrict } = req.params;
    const codeDistrictSlice = codeDistrict.slice(1);
    await WardsModel.find({ codeDistrict: codeDistrictSlice })
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

module.exports = router;

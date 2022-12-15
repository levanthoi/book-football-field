const router = require('express').Router();
const BlogsModel = require('../models/Blogs.js');
const verifyMiddleware = require('../middleware/verifyMiddleware.js');

router.post('/addone', async (req, res) => {
  try {
    const { data } = req.body;

    if (data) {
      await BlogsModel.create(data)
        .then(() => {
          res.status(200).json('Thêm tin thành công.');
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } else {
      res.status(500).json('Lỗi');
    }
  } catch (err) {
    if (err) throw err;
  }
});

router.get('/getlist', async (req, res) => {
  const listBlog = await BlogsModel.find();
  if (listBlog) {
    res.status(200).json(listBlog);
  }
});

router.get('/getone/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const idSlice = id.slice(1);
    await BlogsModel.findById(idSlice)
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

router.put('/updateone/:id', verifyMiddleware.verifyEmployee, async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  if (id) {
    const idSlice = id.slice(1);
    await BlogsModel.findByIdAndUpdate(idSlice, data)
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

router.delete('/deleteone/:id', verifyMiddleware.verifyEmployee, async (req, res) => {
  const { id } = req.params;
  if (id) {
    const idSlice = id.slice(1);
    await BlogsModel.findByIdAndDelete(idSlice)
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

module.exports = router;

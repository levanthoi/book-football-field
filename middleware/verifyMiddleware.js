const jwt = require('jsonwebtoken');

const verifyMiddleware = {
  verifyAuth: (req, res, next) => {
    try {
      const { token } = req.cookies;

      if (token) {
        const accessToken = token.split(' ')[1];
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
          if (err) {
            res.status(403).json('Tài khoản không được truy cập vào trang này');
          }
          req.data = data;
          next();
        });
      }
    } catch (err) {
      if (err) throw err;
    }
  },

  verifyEmployee: (req, res, next) => {
    verifyMiddleware.verifyAuth(req, res, () => {
      const { roleId } = req.data;
      if (roleId === 2) {
        next();
      } else {
        res.status(200).json('Tài khoản không có quyền truy cập.');
      }
    });
  },

  verifyOwner: (req, res, next) => {
    verifyMiddleware.verifyAuth(req, res, () => {
      const { roleId } = req.data;
      if (roleId === 3) {
        next();
      } else {
        res.status(200).json('Tài khoản không có quyền truy cập.');
      }
    });
  },

  verifyAdmin: (req, res, next) => {
    verifyMiddleware.verifyAuth(req, res, () => {
      const { roleId } = req.data;
      if (roleId === 0) {
        next();
      } else {
        res.status(200).json('Tài khoản không có quyền truy cập.');
      }
    });
  },
};

module.exports = verifyMiddleware;

// const bcrypt = require('bcrypt')
// const UsersModel = require('../models/Users.js')

// async function checkInfoUser(data) {
//     const { username, email, password } = data

//     const userDB = UsersModel.findOne({
//         username,
//         email,
//     })
//     if(!userDB) {
//         const salt = await bcrypt.genSalt(10)
//         const hashPassword = await bcrypt.hash(password, salt)

//         const newUser = await new UsersModel({
//             username,
//             email,
//             password: hashPassword
//         })
//     } else {
//         return {
//             status: false,
//             message: 'Tài khoản đã tồn tại.'
//         }
//     }
// }

// module.exports = checkInfoUser

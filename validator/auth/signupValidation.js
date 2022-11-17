const { body } = require('express-validator')
const User = require('../../models/User')

module.exports = [
    body('username')
        .isLength({ min: 2, max: 15 })
        .withMessage('Username Must Be Between 2 to 15 chars')
        .custom(async username => {
            let user = await User.findOne({ username })
            if (user) {
                return Promise.reject('Username Already Used')
            }
        })
        .trim(),
    body('email')
        .isEmail().withMessage('Please provide a Valid Email')
        .custom(async email => {
            let user = await User.findOne({ email })
            if (user) {
                return Promise.reject('email Already Used')
            }
        })
        .normalizeEmail(),
    body('password')
        .isLength({ min: 6 }).withMessage('Your password Must Be Greater than 5 Chars')
    ,
    body('confirmPassword')
        .isLength({ min: 6 }).withMessage('Your password Must Be Greater than 5 Chars')
        .custom((confirmPassword, { req }) => {
            if (confirmPassword !== req.body.password) {
                throw new Error('Password Dose Not Match')
            }
            return true
        })

]
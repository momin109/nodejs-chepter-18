const router = require('express').Router()

const signupValidator = require('../validator/auth/signupValidation')
const loginValidator = require('../validator/auth/loginValidator')


const {
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController
} = require('../controllers/authController')

const { isUnAthenticated } = require('../middleware/authMiddleware')

router.get('/signup', isUnAthenticated, signupGetController)
router.post('/signup', isUnAthenticated, signupValidator, signupPostController)

router.get('/login', isUnAthenticated, loginGetController)
router.post('/login', isUnAthenticated, loginValidator, loginPostController)

router.get('/logout', logoutController)

module.exports = router
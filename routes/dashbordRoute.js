const routes = require('express').Router()

// user login na takle ai page dhukte parbe na
const { isAuthenticated } = require('../middleware/authMiddleware')

const {
    dashboardGetController
} = require('../controllers/dashbordControllers')

routes.get('/', isAuthenticated, dashboardGetController)

module.exports = routes
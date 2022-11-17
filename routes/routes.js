const authRoute = require('./authRoute')
const dashboardRoute = require('./dashbordRoute')
const playgroundRout = require('../playground/play')

const routes = [
    {
        path: '/auth',
        handler: authRoute
    },
    {
        path: '/dashboard',
        handler: dashboardRoute
    },
    {
        path: '/playground',
        handler: playgroundRout
    },
    {
        path: '/',
        handler: (req, res) => {
            res.json({
                message: 'Hello World'
            })
        }
    }
]

module.exports = app => {
    routes.forEach(r => {
        if (r.path === '/') {
            app.get(r.path, r.handler)
        } else {
            app.use(r.path, r.handler)
        }
    })
}
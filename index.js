require("dotenv").config()
const { json } = require('express')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('config')
const setMiddleware = require('./middleware/middleware')

//import Routes
const setRoutes = require('./routes/routes')


const MONGODB_URI = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.zew6ktz.mongodb.net/socailUser`


//setup view Engine
app.set('view engine', 'ejs')


// Using middleware from middleware Directory
setMiddleware(app)

// Using Routes from Route Directory
setRoutes(app)

// app.use((req, res, next) => {
//     let error = new Error('404 Page Not Found')
//     error.status = 404
//     next(error)
// })

// app.use((error, req, res, next) => {
//     if (error.status === 404) {
//         return res.render('/pages/error/404', { flashMessage: {} })
//     }
//     res.render('pages/error/500', { flashMessage: {} })
// })


const PORT = process.env.PORT || 4000
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('database connected')
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
        })
    })
    .catch(e => {
        return console.log(e)
    })






// 3 dhorone error ache
// no. 1  syntax error
// no. 2  runtime error exjample:-(req ba res banan bhul gele ba tikmoto na dea hole ai rokom error aste pare)
// no. 3  logical error

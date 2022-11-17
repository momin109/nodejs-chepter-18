const express = require('express')
const morgan = require('morgan')
const { json } = require('express')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash')
const config = require('config')

const { bindUserWithRequest } = require('./authMiddleware')
const setLocals = require('./setLocals')


const MONGODB_URI = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.zew6ktz.mongodb.net/socailUser`

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'Session',
    expires: 1000 * 60 * 60 * 24
});

const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express(json),
    session({
        secret: process.env.SECRET_KEY || 'SECRET_KEY',
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    flash(),
    bindUserWithRequest(),
    setLocals()

]

module.exports = app => {
    middleware.forEach(m => {
        app.use(m)
    })
}
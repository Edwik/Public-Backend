'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const EXPRESS    = require('express')
const BODYPARSER = require('body-parser')
const APP        = EXPRESS()
const ROUTES     = require('./routes')
const CORS       = require('cors')

APP.use(BODYPARSER.urlencoded({ extended: false }))
APP.use(BODYPARSER.json())
APP.use(CORS())

APP.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
});

APP.use('/api', ROUTES)

APP.get('/', (req,res) =>{
    res.status(200).send({msg: 'Hello Coder! Welcome to Api by Edwin Anaya.'})
})

// APP.use(response);

APP.use(function(req, res, next) {
    return res.status(404).send({ msg: `Route ${req.url} Not Found.`})
});

module.exports = APP
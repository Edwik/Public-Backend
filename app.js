'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api', api)
app.get('/', (req,res) =>{
    res.status(200).send({msg: 'Hello coder! welcome to Api by Edwin Anaya.'})
})

app.use(function(req, res, next) {
    return res.status(404).send({ msg: 'Route'+req.url+' Not found.' });
});

// app.use(function(err, req, res, next) {
//     return res.status(500).send({ msg: "500 server error", error: err });
// });

module.exports = app
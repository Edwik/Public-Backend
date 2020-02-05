'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const EXPRESS = require('express')
const API = EXPRESS.Router()

const auth = require('../../../middlewares/auth')

const authCtrl   = require('../../../controllers/auth')
const userCtrl   = require('../../../controllers/user')
const hotelsCtrl = require('../../../controllers/hotels')

/*
* Routes for Auth
*/

API.post('/auth', authCtrl.signIn)
API.post('/auth/register', authCtrl.signUp)

/*
* Routes for Users
*/

API.get('/user', auth, userCtrl.index)
API.get('/user/:userId', auth, userCtrl.show)
API.put('/user/:userId', auth, userCtrl.update)
API.delete('/user/:userId', auth, userCtrl.destroy)
API.get('/user/hello/:name', auth, userCtrl.hello)

/*
* Routes for Mock server
*/

API.get('/hotels', hotelsCtrl.index)
API.post('/hotels', hotelsCtrl.store)
API.delete('/hotels/:id', hotelsCtrl.destroy)

API.use(function(req, res, next) {
    return res.status(404).send({ msg: 'Route'+req.url+' Not found.' })
});

module.exports = API
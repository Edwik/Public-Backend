'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const ROUTES_MOBILE = require('./mobile/v1')
const ROUTES_WEB    = require('./www/v1')
const EXPRESS       = require('express')
const APP           = EXPRESS()

APP.use('/m/v1', ROUTES_MOBILE)
APP.use('/w/v1', ROUTES_WEB)

module.exports = APP
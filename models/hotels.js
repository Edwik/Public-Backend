'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const MONGOOSE = require('mongoose')
const Schema = MONGOOSE.Schema

const HotelsSchema = Schema({
    name: String,
    starts: String,
    images: [String],
    price: String,
})

module.exports = MONGOOSE.model('Hotels', HotelsSchema)



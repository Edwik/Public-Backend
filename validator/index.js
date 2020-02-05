'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const { jsonResponse } = require('../tools/jsonResponse')
const CODES = require('../values/codes')

function validator (err, objet){
    if(err) return jsonResponse(false,CODES.e001)
    if(!objet) return jsonResponse(false,CODES.e002)

    return jsonResponse(true,CODES.e000)
}

module.exports = {validator}
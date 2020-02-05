'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const SERVICES = require('../services')

function isAuth (req, res, next) {
    if(!req.headers.authorization) return res.status(403).send({msg: 'You do not have authorization.'})

    const TOKEN = req.headers.authorization.split(" ")[1]

    SERVICES.decodeToken(TOKEN).then( response=>{
        req.user = response
        next()
    }).catch( response=>{
        res.status(response.status)
    })

}

module.exports = isAuth
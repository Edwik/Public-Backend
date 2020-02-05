'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const JWT = require('jwt-simple')
const MOMENT = require('moment')
const DAYS = 14

function createToken (user) {
    const payload = {
        sub: user._id,
        iat: MOMENT().unix(),
        exp: MOMENT().add(DAYS, 'days').unix(),
    }

    return JWT.encode(payload, process.env.SECRET_TOKEN)
}

function decodeToken (token) {
    const decoded = new Promise( (resolve, reject)=>{
        try {

            const payload = JWT.decode(token, process.env.SECRET_TOKEN)

            if(payload.exp <= MOMENT().unix()){
                reject ({
                    status: 401,
                    msg: 'The Token has Expired.'
                })
            }

            resolve(payload.sub)

        } catch (err) {
            reject({
                status: 500,
                msg: 'Invalid Token.'
            })
        }
    })

    return decoded
}

module.exports = {createToken, decodeToken}
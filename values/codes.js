'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const STRING = require('./strings')

module.exports ={
    e000:{
        icode: 'e000',
        code: '200',
        msg: `${STRING.code200}`,
    },
    e001:{
        icode: 'e001',
        code: '500',
        msg: `${STRING.code500}`,
    },
    e002:{
        icode: 'e002',
        code: '404',
        msg: `${STRING.code404}`,
    },
}
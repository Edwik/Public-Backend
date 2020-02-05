'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

module.exports = {
    PORT: process.env.PORT || process.env.LOCAL_PORT,
    DB: process.env.MONGODB_URI || process.env.LOCAL_DB,
    SECRET_TOKEN: process.env.SECRET_TOKEN
}
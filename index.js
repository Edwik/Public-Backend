'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

require('dotenv').config()
const MONGOOSE  = require('mongoose')
const APP       = require('./app')
const CONFIG    = require('./config')

MONGOOSE.connect(CONFIG.DB, { useNewUrlParser: true }, (err,res) => {
    
    if(err) throw err
    console.log('Connection to DataBase ON.')

    APP.listen(CONFIG.PORT, ()=>{
        console.log(`API REST Runing: ${CONFIG.PORT}`)
    })
    
})
MONGOOSE.set('useCreateIndex', true)
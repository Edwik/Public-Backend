response_handler = require('../../tools/response_handler')
const MODEL = require('../models/user')

function signUp(opts){

    MODEL.findOne({ email: opts.email}, (err, res) => {

        const userRequest = new MODEL(opts);

        userRequest.save((err)=>{
    
            return response_handler(err)
    
        })
    })

}

module.exports = signUp
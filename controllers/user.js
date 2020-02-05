'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const MODEL = require('../models/user')
const VALIDATE = require('../validator')

function index (req, res) {
    
    MODEL.find({}, (err, users)=>{

        const VR = VALIDATE.validator(err,users)
        if(!VR.status) return res.status(VR.res.code).send(`${VR.res.icode}, ${VR.res.msg} \n ${err}`)
        res.status(VR.res.code).send({users})

    }).select('-password')

}

function show (req, res) {

    let userId = req.params.userId
    MODEL.findById(userId, (err, user)=>{

        const VR = VALIDATE.validator(err,user)
        if(!VR.status) return res.status(VR.res.code).send(`${VR.res.icode}, ${VR.res.msg} \n ${err}`)
        res.status(VR.res.code).send({user})

    })

}

function store (req, res) { }

function update (req, res) {

    let userId = req.params.userId
    let update = req.body

    MODEL.findByIdAndUpdate(userId, update, (err, user)=>{

        const VR = VALIDATE.validator(err,user)
        if(!VR.status) return res.status(VR.res.code).send(`${VR.res.icode}, ${VR.res.msg} \n ${err}`)
        res.status(VR.res.code).send({user})
    })

}

function destroy (req, res) {
    let userId = req.params.userId

    MODEL.findById(userId, (err, user)=>{
        const VR = VALIDATE.validator_res(err,user)
        if(!VR.status) return res.status(VR.res.code).send(`${VR.res.icode}, ${VR.res.msg} \n ${err}`)
    
        user.remove(err => {
            if(err) res.status(500).send( {msg: `Error deleting: ${err}`})
            res.status(200).send({msg: 'The user has been deleted.'})
        })
    })

}

function hello (req, res) {
    res.send(200, { message: `Hello ${req.params.name}!` })
}

module.exports = { index, show, store, update, destroy, hello }
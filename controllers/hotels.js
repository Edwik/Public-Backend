'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const MODEL = require('../models/hotels')
const VALIDATOR = require('../validator')

function index (req, res) {

    MODEL.find({}, (err, hotels)=>{

        const VR = VALIDATOR.validator(err,hotels)
        if(!VR.status) return res.status(VR.res.code).send(`${VR.res.icode}, ${VR.res.msg} \n ${err}`)
        res.status(VR.res.code).send({hotels})

    })
}

function store (req, res) {
    
    if( !req.body.name || !req.body.starts  || !req.body.images || !req.body.price ) return res.status(402).send({msg: 'Missing paramenters.'})

    let model = new MODEL()
    model.name   = req.body.name
    model.starts = req.body.starts
    model.images = req.body.images
    model.price  = req.body.price

    model.save( (err, hotelStored)=>{

        const VR = VALIDATOR.validator(err,hotelStored)
        if(!VR.status) return res.status(vr.res.code).send(`${VR.res.icode}, ${VR.res.msg} \n ${err}`)
        res.status(VR.res.code).send({hotel: hotelStored})

    })
}

function destroy (req, res) {
    let id = req.params.id

    MODEL.findById(id, (err, hotel)=>{
        const VR = VALIDATOR.validator(err,hotel)
        if(!VR.status) return res.status(VR.res.code).send(`${VR.res.icode}, ${VR.res.msg} \n ${err}`)
    
        hotel.remove(err => {
            if(err) res.status(500).send( {msg: `Error deleting: ${err}`})
            res.status(200).send({msg: 'The hotel been removed.'})
        })

    })

}

module.exports = { index, store, destroy }
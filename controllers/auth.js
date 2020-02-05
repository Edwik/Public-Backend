'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const MODEL = require('../models/user')
const SERVICE = require('../services')

function signUp (req, res) {

    if (!req.body.email || !req.body.password || !req.body.displayName) return res.status(403).send({msg: 'Missing parameters.'})

    MODEL.findOne({ email: req.body.email}, (err, user) => {

        const userRequest = new MODEL({
            email:       req.body.email,
            displayName: req.body.displayName,
            password:    req.body.password
        })

        if (err) return res.status(500).send({msg: err})
        if (user) return res.status(404).send({msg: `The user exists.`})

        userRequest.save((err)=>{

            if(err) return res.status(500).send({msg: `Error creating user. ${err}`})
            return res.status(200).send({ msg: `User created successfully.`})

        })
    })
}

function signIn (req, res) {

    if (!req.body.email || !req.body.password) return res.status(403).send({msg: 'Missing parameters.'})

    MODEL.findOne({ email: req.body.email}, (err, user) => {

        if (err) return res.status(500).send({msg: err})
        if(!user) return res.status(404).send({msg: `There is no user.`})

        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) return res.status(500).send({msg: `! ${err}`})
            if(!isMatch) return res.status(404).send({msg: `Wrong password.`})

            req.user = user
                res.status(200).send({
                    profile: user.gravatar(),
                    msg: 'You have successfully logged in.',
                    token: SERVICE.createToken(user)
                })
        })
    })
}

module.exports = { signIn, signUp }
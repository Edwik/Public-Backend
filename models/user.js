'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

const MONGOOSE = require('mongoose')
const Schema = MONGOOSE.Schema
const BCRYPT = require('bcrypt-nodejs')
const CRYPTO = require('crypto')

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    avatar: String,
    password: { type: String },
    signUpDate: { type: Date, default: Date.now() },
    lastLogin: Date
})

UserSchema.pre('save', function (next){
    let user = this
    if(!user.isModified('password')) return next()

    BCRYPT.genSalt(10, (err, salt) => {
        if(err) return next()

        BCRYPT.hash(user.password, salt, null, (err, hash) =>{
            if(err) return next(err)

            return user.password = hash
        })
    })
    next()

})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    BCRYPT.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

UserSchema.methods.gravatar = function () {
    if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

    const md5 = CRYPTO.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = MONGOOSE.model('User', UserSchema)
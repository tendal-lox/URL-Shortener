'use strict'

const mongoose = require('mongoose')
const shortId = require('shortid')

const shrinkedUrlModel = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shrinkUrl: {
        type: String,
        required: true,
        default: shortId.generate
    }
})

module.exports = mongoose.model('shrinkedurls', shrinkedUrlModel)
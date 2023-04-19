'use strict'

const mongoose = require('mongoose')
const shrinkedUrlModel = require('../mongooseModel/model')

module.exports = async function DB () {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('DataBase connected')
    } catch (err) {
        console.error('Mongodb connection error', err)
    }
}

module.exports.insertRecord = async function (fullurl) {
    new shrinkedUrlModel({fullUrl: fullurl}).save()
}

module.exports.allRecord = async function () {
    return shrinkedUrlModel.find()
}

module.exports.findOneRecord = async function (shrinkurl) {
    return shrinkedUrlModel.findOne({shrinkUrl: shrinkurl})
}
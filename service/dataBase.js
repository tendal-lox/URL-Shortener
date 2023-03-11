'use strict'

const shortUrl = require('../model/mongooseSchema')
const mongoose = require('mongoose');

module.exports = async function dataBase () {
  try {
    mongoose.connect('mongodb://localhost/testdb')
    .then(_ => {
      console.log('connected')
    })
  }catch (err) {
      console.error(err)
  }
}

module.exports.insertRecord = async (req) => {
  new shortUrl({full: req.body.fullUrl}).save()
}

module.exports.allRecored = async () => {
  return await shortUrl.find()
}

module.exports.findOne = async (req) => {
  return await shortUrl.findOne({short: req.params.shortUrl})
}
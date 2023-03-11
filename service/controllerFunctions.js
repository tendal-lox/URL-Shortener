'use strict'

const DB = require('./dataBase')

exports.insertFunction = async (req) => {
    await DB.insertRecord(req)
}

exports.allRecoredFunction = async () => {
    return await DB.allRecored()
}

exports.findOneRecordFunction = async (req) => {
    return await DB.findOne(req)
}
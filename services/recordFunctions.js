'use strict'

const {insertRecord, allRecord, findOneRecord} = require('./dataBase')

module.exports.insertRecordFunction = async (req) => {
    const {fullUrl} = req.body
    insertRecord(fullUrl)
}

module.exports.getAllRecord = async () => {
    return allRecord()
}

module.exports.findOneRecordFunction = async (req) => {
    const {shrinkUrl} = req.params
    return findOneRecord(shrinkUrl)
}
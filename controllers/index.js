'use strict'

const router = require('express').Router()
const {insertRecordFunction, getAllRecord, findOneRecordFunction} = require('../services/recordFunctions')

router.get('/', async (req, res) => {
    const data = await getAllRecord()
    res.render('index', {allShrinkedUrl: data})
})

router.post('/shrinkurl', async (req, res) => {
    await insertRecordFunction(req)
    res.redirect('/')
})

router.get('/:shrinkUrl', async (req, res) => {
    const shrinkedUrl = await findOneRecordFunction(req)
    res.redirect(shrinkedUrl.fullUrl)
})

module.exports = router
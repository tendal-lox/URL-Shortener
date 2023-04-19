const express = require('express')
const router = express.Router()
const {insertFunction, allRecoredFunction, findOneRecordFunction} = require('../service/controllerFunctions')

router.use((req, res, next) => {
    console.log('logged at', new Date().toTimeString())
    next()
})

router.get('/', async (req, res) => {
    const data = await allRecoredFunction()

    res.render('index', {shortUrls: data})
})

router.post('/shorturl', async (req, res) => {
    await insertFunction(req)
    res.redirect('/')
})

router.get('/:shortUrl', async (req, res) => {
    const shortUrl = await findOneRecordFunction(req)

    if (!shortUrl.full) return res.sendStatus(404)
    
    shortUrl.clicks++
    shortUrl.save()

    console.log(shortUrl)

    res.redirect(shortUrl.full)
})

module.exports = router
// 'use strict'

// const express = require('express')
// const router = express.Router()
// const {findOneRecordFunction} = require('../service/controllerFunctions')

// router.get('/:shortUrl', async (req, res) => {
//     const shortUrl = await findOneRecordFunction(req)

//     console.log(shortUrl)
//     if (!shortUrl.full) return res.sendStatus(404)

//     shortUrl.clicks++
//     shortUrl.save()

//     res.redirect(shortUrl.full)
// })

// module.exports = router
const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./controllers/index')
require('./services/dataBase')()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(router)

async function main () {
    try {
        app.listen(process.env.PORT || 4000)
        console.log('Server connected')
    } catch (err) {
        console.error('Express server connection error', err)
    }
}

main()
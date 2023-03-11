const express = require('express')
const app = express()
const route = require('./controller/index')
// const shortUrlRoute = require('./controller/shortUrl')
const db = require('./service/dataBase')
db()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(route)
// app.use(shortUrlRoute)

async function main () {
    try {
        app.listen(process.env.PORT || 3000)
    }catch (err) {
        console.error(err)
    }
}
main()
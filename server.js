require('dotenv').config()
const express = require("express")
const app = express()
const mon = require('mongoose')

mon.connect(process.env.MONGO_DATABASE_URL,{useNewUrlParser: true})
const db = mon.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('Connected to database'))


app.use(express.json())

const newsRouter = require('./routes/news')
app.use('/news',newsRouter)


app.listen(3000, () => {
    console.log('server started')
})
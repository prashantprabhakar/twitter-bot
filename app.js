// @ts-check
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { port, mongoUrl, twitterJobTime} = require('./config/config')
const initDB = require('./utils/initDB')

const { searchTweets }  = require('./routes/twitter/bot')

const app = express()

// setup mongo
const connectMongo = require('./utils/connectMongo')

// cors middleware
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



// use routes
const routes = require('./routes')
app.use('/api',routes)

connectMongo(mongoUrl).then(async() => {
  await initDB()
  app.listen(port, () => {
    console.log(`server listening on ${port}`)
    /**
     * This would have been better handled by having a sepparate job-scheduler using `cron` module
     * For demo purpose it has been called using set-interval
     */
    setInterval(searchTweets, twitterJobTime);
  })
})







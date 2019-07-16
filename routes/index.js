const express = require('express')
const router = express.Router()

const tweets = require('./twitter/tweets')

router.use('/tweets', tweets)

module.exports = router 

const Twitter = require('twitter')
let {twitterConfig} = require('../config')


let client = new Twitter(twitterConfig);

module.exports = client
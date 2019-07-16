const mongoose = require('mongoose')

const tweetsSchema = new mongoose.Schema({
  userid: {type: String, required: true}, // user id of tweet
  tweetid: { type: Number, required: true}, // id of tweet
  text: { type:String}, // text of tweet
  retweet_count: { type: Number}, // count of re-tweets
  created_at: { type: Date},  // when tweet wwas created
  ctrd: { type: Date, default: Date.now}, // time when record was inserted
})

module.exports = mongoose.model('tweets', tweetsSchema)

// (created_at,id,text,user name, user description, re-tweet count)
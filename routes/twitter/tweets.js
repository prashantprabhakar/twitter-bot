// @ts-check
const express = require('express')
const router = express.Router()

const { handleResponse } = require('./../../utils/responseHanlder')
const tweetsModel = require('./../../models/tweets.model')

router.get('/count-tweets-by-user/:userid', async(req, res) => {
  try {
    let { userid } = req.params
    if(!userid) return handleResponse(res,400, 'Missing userid')
    let tweetCounts  =  await tweetsModel.count({userid})
    return handleResponse(res,200, 'Fetched counts', {tweetCounts})
    
  } catch(e) {
    console.log(e)
    return handleResponse(res, 500, e.mesage)
  }
})

router.get('/sorted-tweets/', async(req, res) =>{
  try {
    let  { userid, sortBy, limit=10, skip=0 } = req.query
    let searchQuery = {}
    if(userid) { searchQuery.userid = userid}

    let allowedSortByFields = ['retweet_count', 'created_at']

    if(sortBy && !allowedSortByFields.includes(sortBy) ) {
      return handleResponse(res, 400, 'sort by field is not supported')
    } 

    let tweets = await tweetsModel.find(searchQuery).sort(sortBy).skip(skip).limit(limit)
    return handleResponse(res,200, 'Fetched counts', tweets)
  } catch(e){
    console.log(e)
    return handleResponse(res, 500, e.mesage)
  }
})

module.exports = router
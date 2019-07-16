
const twitter = require('./../../utils/twiter')
const tweetsModel = require('./../../models/tweets.model')
const jobsDataModel = require('./../../models/jobsdata.model')
const { twitterJobTime } = require('./../../config/config')
const userModel = require('./../../models/user.model')

const searchTweets = async(searchterm) => {
  try {
    let {value:since_id=0} = await jobsDataModel.findOne({key: 'max_tweeet_id'})
    let searchParams = {
      q: searchterm,
      count: 2,
      lang: 'en',
      since_id
    }
    let tweetsData = await twitter.get('/search/tweets', searchParams)
    if(!tweetsData || !tweetsData.statuses) return

    let tweets = tweetsData.statuses
    console.log(`total tweets fetched ${tweets.length}`)
    tweets.forEach(async tweet => {
      await addTweetToDb(tweet)
      await addUserTooDb(tweet.user)
    })
    await jobsDataModel.updateOne({ key: 'max_tweeet_id'}, {$set: {value: tweetsData.search_metadata.max_id_str}})
  } catch(e) {
    console.log(e)
  }
}


async function addTweetToDb(tweet) {
  try{
    let { id_str:tweetid, text, user, created_at, retweet_count} = tweet
    if(!tweetid || !user.id_str) {
      console.log("Missing tweet or user id")
      return
    }

    let istweetExists =  await tweetsModel.findOne({ tweetid })
    if(istweetExists)  return
    await new tweetsModel({
      tweetid,
      userid: user.id_str,
      text,
      created_at,
      retweet_count
    }).save()
  } catch(e) {
    console.log(e)
  }

}

async function addUserTooDb(user) {
  try{
    let { id_str:userid, name, screen_name, location } = user
    // check if user already exists
    let ifuserExists = await userModel.findOne({ userid })
    if(ifuserExists) return
    await  new userModel({
      userid, name, screen_name, location
    }).save()
  } catch(e){
    console.log(e)
  }
}

searchTweets('bitcoin')
searchTweets('blockchain')

module.exports = {
  searchTweets
}
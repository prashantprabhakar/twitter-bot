module.exports = {
    port: 8080,
    mongoUrl: 'mongodb://localhost:27017/twitter-bot',

    twitterJobTime: 30*60*1000, // 30 minutes

    twitterConfig = {
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    }
}
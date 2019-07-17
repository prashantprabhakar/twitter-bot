## Twitter-Bot

A bot that fetches tweets using twitter npm package

## Start:
    npm install
    node app.js

### Supported APIs

##### Get Tweet Count by user

- **API Endpoint**: /api/tweets/count-tweets-by-user/<userid>
- **Header**: content-type: application/json

##### Get tweets

- **API Endpoint:** /api/tweets/sorted-tweets
- **Query Params:** userid, sortBy, limit(default:10), skip(default:0)
- **Note:** sortBy only  supports retweet_count and created_at

##### Get user list

- **API Endpoint:** /api/tweets/user-list


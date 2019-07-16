## Twitter-Bot

A bot that fetches tweets using twitter npm package

### APIs

##### Get Tweet Count by user

API Endpoint: /api/tweets/count-tweets-by-user/<userid>
Path Param: userid (required)
Header: content-type: application/json

##### Get tweets

API EndpointL /api/tweets/sorted-tweets
Header: content-type: application/json
Query Params: userid, sortBy, limit(default:10), skip(default:0)
Note: sortBy only  supports retweet_count and created_at


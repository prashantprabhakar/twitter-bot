// @ts-check

const jobsDataModel = require('./../models/jobsdata.model')

const initializeDB = async() => {
  let isTableInitialized = await jobsDataModel.findOne({})
  if(!isTableInitialized) {
    await new jobsDataModel({
     key: 'max_tweeet_id',
     value: '0'
    }).save()

    console.log("DB initialized")
  }
}

module.exports = initializeDB
//max_id_str

const mongoose = require('mongoose')

const jobsDataSchema = new mongoose.Schema({
  key: {type: String, required: true},
  value: {type: String, default: '0'},
  ctrd: { type: Date, default: Date.now}, // time when record was inserted
})

module.exports = mongoose.model('job_data', jobsDataSchema)
const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
  name: String,
  skill: Array
}, { versionKey: false })

module.exports = skillSchema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: String,
    link: String,
  });

module.exports = new mongoose.model('Image', imageSchema);

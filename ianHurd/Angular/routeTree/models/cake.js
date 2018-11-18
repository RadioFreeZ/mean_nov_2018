var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Rating = require('../models/rating');
var CakeSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, "Image is required!"]
  },
  baker: {
    type: String,
    required: [true, "Baker is required!"]
  },
  ratings: [{type: Schema.Types.ObjectId, ref: 'Rating'}]
}, {timestamps: true });

var Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;

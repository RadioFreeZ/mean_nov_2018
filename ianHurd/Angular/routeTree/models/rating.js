var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RatingSchema = new mongoose.Schema({
  star: {
    type: Number,
    required: [true, "A rating is required!"]
  },
  comment: {
    type: String
  }
}, {timestamps: true});
var Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;

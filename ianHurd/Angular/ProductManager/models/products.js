var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
    minlength: [4, 'title must be at least 4 characters long']
  },
  price: {
    type: Number,
    required: [true, 'price is required']
  },
  img: {
    type: String,
  }
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

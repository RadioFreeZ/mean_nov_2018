var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/myDatabase");
autoIncrement.initialize(connection);

var ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
    minlength: [3, 'title must be at least 3 characters long']
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
    min:[0, 'Must be greater than or equal to zero']

  },
  quantity: {
    type: Number,
    required: [true, 'quantity is required'],
    min:[0, 'Must be greater than or equal to zero']
  }
}, {timestamps: true });

ProductSchema.plugin(autoIncrement.plugin, 'Product')
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

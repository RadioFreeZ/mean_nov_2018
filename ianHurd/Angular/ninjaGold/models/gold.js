var mongoose = require('mongoose');

var GoldSchema = new mongoose.Schema({
  value: {
    type: Number
  },
}, {timestamps: true });

var Gold = mongoose.model('Gold', GoldSchema);
module.exports = Gold;

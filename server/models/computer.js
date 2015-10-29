var mongoose = require('mongoose-q')(require('mongoose'),{spread:true});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Computer = new Schema ({
  make: String,
  model: String,
  price: Number
});



mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/computers');
module.exports = mongoose.model('computers', Computer);

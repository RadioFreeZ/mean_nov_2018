const path = require('path'),
		fs = require('fs'),
		mongoose = require('mongoose');

// CHANGE NAME OF DATABASE HERE
mongoose.connect('mongodb://localhost/basic_mongoose', {useNewUrlParser: true});

// create variable that points to the models folder
const models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function (file) {
	if (file.indexOf('.js') >= 0) {
		// require the file (this runs the model file, which registers the schema)
		require(models_path + '/' + file);
	}
});
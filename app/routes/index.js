'use strict';

var path = process.cwd();

module.exports = function (app) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/bio')
		.get(function(req, res) {
			res.sendFile(path + '/public/bio.html');
		});
		
	app.route('/music')
		.get(function(req, res) {
			res.sendFile(path + '/public/music.html');
		});
		
	app.route('/upcoming')
		.get(function(req, res) {
			res.sendFile(path + '/public/upcoming.html');
		});

};

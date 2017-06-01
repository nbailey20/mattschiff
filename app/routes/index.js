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
		
	app.route('/pics&press')
		.get(function(req, res) {
			res.sendFile(path + '/public/pics&press.html');
		});
		
	app.route('/listen')
		.get(function(req, res) {
			res.sendFile(path + '/public/listen.html');
		});
	
	app.route('/associations')
		.get(function(req, res) {
			res.sendFile(path + '/public/associations.html');
		});
		
	app.route('/calendar')
		.get(function(req, res) {
			res.sendFile(path + '/public/calendar.html');
		});
		
	app.route('/blog')
		.get(function(req, res) {
			res.sendFile(path + '/public/blog.html');
		});
	
	app.route('/contact')
		.get(function(req, res) {
			res.sendFile(path + '/public/contact.html');
		});
		
};

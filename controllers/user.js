var express = require('express');
var ctrl 	= express.Router();


var users = [
	{
		username: 'Testy McTestingSon',
		password: 'l33tp4zzw0rdz'
	},
	{
		username: 'Bilbo Baggins',
		password: 'my precious'
	},
	{
		password: 'mushrooms',
		username: 'Mario'
	}
];
ctrl.get('/', function(req, res, next) {
	// request
	// response
	// callback 
	res.json(users);
	//res.render('view', {});
});

module.exports = ctrl;
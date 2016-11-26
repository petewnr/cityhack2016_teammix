// routes

var async			= require('async');
var express 		= require('express');
var router 			= express.Router();
/*
var devicedata		= require('./models/devicedata');
var registerdevice	= require('./models/registerdevice');
var devices			= require('./models/devices');
*/

//var utils		= require('./utils');

/* example
	
	router.get('/user/:id', function(req, res)
	{
	  user.getbyid(req.params.id, res);
	});

*/

router.get('/', function(req, res) {
    res.send({ message: 'hooray! welcome to our api!' });   
});


module.exports = router;
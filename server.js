// api server for ixd-iot database

var express 	= require('express');
var bodyparser 	= require('body-parser');
var connection 	= require('./connection');
var routes 		= require('./routes');
var cors		= require('cors');
var async		= require('async');
var bodyParserJsonError = require('express-body-parser-json-error');

//var config		= require('./config');

var apiserver = express();

var port = process.env.PORT || 8080;

apiserver.use(cors());
apiserver.use(bodyparser.urlencoded({extended: true}));
apiserver.use(bodyparser.json());

apiserver.use(bodyParserJsonError());

connection.init();

//apiserver.all('/api/s/*', [require('./middleware/validaterequest')]);
apiserver.use('/api', routes);

var server = apiserver.listen(port, function(){
	console.log('Server is listening on port ' + server.address().port);
})

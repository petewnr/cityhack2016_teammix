// utility functions
var nodemailer 	= require('nodemailer'); // for sendEmail
var multer		= require('multer');


module.exports = {
	
	
	sendEmail: function(coordEmail, userEmail, subject, plainText, htmlText, callback)
	{
		console.log("hello from utils.js / sendEmail");
		
		var transporter = nodemailer.createTransport(
		{
			service: 'Gmail',
			auth: {
				user: 'uqvmarks@gmail.com',
				pass: 'thisisuqvmarks'
			}
		});
		
		var mailoptions = 
		{
			// need to fix this so it draws the email address of the course co-ordinator from the db
			from: coordEmail,
			to: userEmail,
			subject: subject,
			text: plainText,
			html: htmlText
		};
		
		transporter.sendMail(mailoptions, function(err, info)
		{
			if(err)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	
	logAccess: function (con, userID, accessType, details, callback)
	{
		// set current date
		var datenow = new Date();
		var timenow = new Date();
		con.query('INSERT INTO logAccess (userID, accessType, details, date, time) VALUES (?, ?, ?, ?, ?)', [userID, accessType, details, datenow, timenow], function(err, result)
		{
			if (err)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	}
	
	/*
	uploadCSV: function(req, res, callback)
	{
		var storagecsv = multer.diskStorage(
		{
		    destination: function(req, file, cb)
		    {
		    	cb(null, './files/')
		    },
		    filename: function (req, file, cb)
		    {
		    	var rightnow = Date.now();
				csvFileName = 'csv_' + rightnow + '_' + file.originalname;
				//convertedFileName = 'csv_' + rightnow;
				cb(null, csvFileName)
		    }
		});
		
		var upload = multer(
		 	{
		    	storage: storagecsv
		 	}
		).single('csvfile');
	}
	*/
}
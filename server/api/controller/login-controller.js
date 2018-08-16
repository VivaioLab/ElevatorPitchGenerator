'use strict';
var generator = require('generate-password');
var db = require('../../database/database');
const login = db.login;
const pitch = db.pitch;

exports.createuser = (req, res) => {	
    // Save to PostgreSQL database
	login.create({
        "user_name": req.body.user_name, 
        "password": req.body.password, 
        "email" : req.body.email,
    }).then(login => {		
			// Send created customer to client
			res.json(login);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

exports.getusersbyemail = (req, res) => {
	login.find({where :{email : req.body.email}}).then(log => {
			// Send Login details to Client
			res.json(log);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

exports.getusers = (req, res) => {
	login.findAll().then(login => {
			// Send All Users to Client
			res.json(login.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

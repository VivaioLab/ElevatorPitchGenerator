'use strict';
var generator = require('generate-password');
var db = require('../../database/database');
var nodemailer = require('nodemailer');
const questions = db.questions;
const login = db.login;
const pitch = db.pitch;
const answers = db.answers;



exports.createquestion = (req, res) => {	
	// Save to PostgreSQL database
	questions.create({
        "question": req.body.question, 
        "hint": req.body.hint, 
    }).then(questions => {		
			// Send created customer to client
			res.json(questions);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

exports.getquestions = (req, res) => {
	questions.findAll().then(question => {
			// Send All Customers to Client
			res.json(question.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.getquestionbyID = (req, res) => {	
	questions.findById(req.body.id).then(question => {
			res.json(question);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.updatequestions = (req, res) => {
	const id = req.body.id;
	questions.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json(req.body);
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};



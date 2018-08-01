'use strict';
var generator = require('generate-password');
var db = require('../../database/database');
var nodemailer = require('nodemailer');
const Questions = db.questions;
const Login = db.login;
const Pitch = db.pitch;
const Answers = db.answers;



exports.SaveAnswer = (req, res) => {	
	// Save to PostgreSQL database
	Answers.create({
        "answer": req.body.answer, 
        "question_id": req.question_id, 
        "pitch_id": req.body.pitch_id, 
    }).then(questions => {		
			// Send created customer to client
			res.json(questions);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.CreateQuestion = (req, res) => {	
	// Save to PostgreSQL database
	Questions.create({
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
exports.LinkPitch = (req, res) => {	
	// Save to PostgreSQL database
	Pitch.create({
        "user_id": req.body.user_id
    }).then(pitch => {		
			// Send created customer to client
			res.json(pitch);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.CreateUser = (req, res) => {	
    // Save to PostgreSQL database
    
	Login.create({
        "user_name": req.body.email, 
        "password": generator.generate({length : 8,numbers : true}), 
        "email" : req.body.email,
    }).then(login => {		
			// Send created customer to client
			res.json(login);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.Getusers = (req, res) => {
	Login.findAll().then(login => {
			// Send All Customers to Client
			res.json(login.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.GetQuestions = (req, res) => {
	Questions.findAll().then(question => {
			// Send All Customers to Client
			res.json(question.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

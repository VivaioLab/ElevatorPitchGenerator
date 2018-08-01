'use strict';
var generator = require('generate-password');
var db = require('../../database/database');
var nodemailer = require('nodemailer');
const questions = db.questions;
const login = db.login;
const pitch = db.pitch;
const answers = db.answers;

exports.sendemail = (req,res) =>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jaynirmal15@gmail.com',
          pass: 'hardik2010'
        }
      });
      var mailOptions = {
        from: 'jaynirmal15@gmail.com',
        to: req.body.email,
        subject: 'Sample Pitch',
        text: 'That was easy!'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

exports.saveanswer = (req, res) => {	
	// Save to PostgreSQL database
	answers.create({
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
exports.linkpitch = (req, res) => {	
	// Save to PostgreSQL database
	pitch.create({
        "user_id": req.body.user_id
    }).then(pitch => {		
			// Send created customer to client
			res.json(pitch);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.createuser = (req, res) => {	
    // Save to PostgreSQL database
    
	login.create({
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
exports.getusers = (req, res) => {
	login.findAll().then(login => {
			// Send All Customers to Client
			res.json(login.sort(function(c1, c2){return c1.id - c2.id}));
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
eports.getanswers = (req,res) =>{
    customer.findById(req.params.id).then(customer => {
        res.json(customer);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
}



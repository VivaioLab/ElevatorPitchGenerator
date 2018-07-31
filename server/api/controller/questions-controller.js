'use strict';
var db = require('../../database/database');
const Questions = db.questions;

exports.CreatePitch = (req, res) => {	
	// Save to PostgreSQL database
	Questions.create({
        "username": req.body.question1, 
        "problem": req.body.question2, 
        "solution" : req.body.question3,
        "supporting_value": req.body.question4,
        "proof" : req.body.question5
    }).then(questions => {		
			// Send created customer to client
			res.json(questions);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

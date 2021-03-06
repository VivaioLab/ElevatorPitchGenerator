'use strict';
var db = require('../../database/database');
var nodemailer = require('nodemailer');
const questions = db.questions;
const login = db.login;
const pitch = db.pitch;
const answers = db.answers;

exports.saveanswer = (req, res) => {	
	// Save to PostgreSQL database
	answers.create({
        "answer": req.body.answer, 
        "question_id": req.body.question_id, 
        "pitch_id": req.body.pitch_id, 
    }).then(questions => {		
			// Send created customer to client
			res.json(questions);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

exports.getanswers = (req,res) =>{
    answers.findById(req.params.id).then(answer => {
        res.json(answer);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
}
exports.getasnwersbypitchID = (req, res) => {
	answers.findAll({where :{pitch_id : req.body.pitch_id}}).then(ans => {
			// Send Login details to Client
			res.json(ans.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.getasnwersbypitchIDandQuestionID = (req, res) => {
	answers.find({where :{pitch_id : req.body.pitch_id,question_id : req.body.question_id}}).then(ans => {
			// Send Login details to Client
			res.json(ans);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

exports.getanswerbyID = (req, res) => {	
	answers.findById(req.body.id).then(answer => {
			res.json(answer);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.updateanswer = (req, res) => {
	const id = req.body.id;
	answers.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json(req.body);
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};
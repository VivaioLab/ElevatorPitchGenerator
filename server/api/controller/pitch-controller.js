var generator = require('generate-password');
var db = require('../../database/database');
var nodemailer = require('nodemailer');
const questions = db.questions;
const login = db.login;
const pitch = db.pitch;
const answers = db.answers;

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
exports.getpitchbyemail= (req, res) => {
	
		login.find({where :{email : req.body.email}}).then(log => {
			if(log)
			{
				pitch.findAll({where :{user_id : log.id}}).then(pitches => {
					res.json(pitches);
				}).catch(error => {
					console.log(error);
					res.status(500).json({msg: "error", details: error});
				});
			}
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
exports.updatepitch = (req, res) => {
	const id = req.body.id;
	questions.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json(req.body);
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};
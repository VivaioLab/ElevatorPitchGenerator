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
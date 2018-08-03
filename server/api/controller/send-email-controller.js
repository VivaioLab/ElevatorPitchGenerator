'use strict';
var generator = require('generate-password');
var db = require('../../database/database');
var nodemailer = require('nodemailer');
const questions = db.questions;
const login = db.login;
const pitch = db.pitch;
const answers = db.answers;

exports.getallanswers = (req,res) =>{
	answers.find({where :{pitch_id : req.body.pitch_id}}).then(answer => {
    // Send Login details to Client
    res.json(answer.sort(function(c1, c2){return c1.id - c2.id}));
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "no answers"});
  });
}
exports.getemailassociatedtopitch = (req,res) =>{
	pitch.find({where :{id : req.body.pitch_id}}).then(answer => {
    // Send Login details to Client
    // res.json(answer.sort(function(c1, c2){return c1.id - c2.id}));
    login.find({where : {id : answer.user_id}}).then( log  =>{
      res.json(log.email);
    }).catch(err =>{
      console.log(err);
      res.status(500).json({msg: "error", details: err});
   });
 // res.json(answer.user_id);
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  });
}
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
        to: module.exports.getemailassociatedtopitch(),
        subject: 'Sample Pitch',
        text: module.exports.getallanswers(),
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
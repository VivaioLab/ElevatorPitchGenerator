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
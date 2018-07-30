// 'use strict';
// const questionsService = require('../service/questions-service');
var db = require('../../database/database');
// /**
//  * Returns a list of stickies in JSON based on the
//  * search parameters.
//  *
//  * @param {request} {HTTP request object}
//  * @param {response} {HTTP response object}
//  */
// exports.saveQuestions = function (request, response) {
//     let params = request.body,
//         callback = function (data) {
//             response.status(200);
//             response.json(data);
//         };
//         questionsService.addQuestions(params, callback);
// };

// exports.getUser = function (request, response)
// {

//     let callback = function (data) {
//         response.status(200);
//         response.json(data);
//     };
//     questionsService.getUser({}, callback);
// };


module.exports.CreatePitch = function (req, res) {
    console.log(req.body);
    var query = "INSERT INTO questions(username,problem,solution,supporting_value,proof) VALUES('" +
    req.body.question1 + "','" + req.body.question2 + "','" + req.body.question3 +"','" + req.body.question4 +"','" + req.body.question5 +"')";
    console.log(req.body.username);
    db.query(query).spread(function(result, metadata){
        res.status(200)

    }).catch(function(err){
        res.status(500)
        console.log(err);
    })
}